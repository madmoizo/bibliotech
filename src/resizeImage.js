import imageToCanvas from "./imageToCanvas.js"
import isDataUrl from "./isDataUrl.js"
import parseDataUrl from "./parseDataUrl.js"
import urlToImage from "./urlToImage.js"


/**
 * Resize an image
 * @param {string} src URL or data URL
 * @param {object} operation
 * @param {number} [options.mime]
 * @param {number} [options.quality]
 * @param {number} [options.width]
 * @param {number} [options.height]
 * @param {number} [options.cropWidth]
 * @param {number} [options.cropHeight]
 * @param {'cover'} [options.objectFit]
 * @param {boolean} [options.toBlob]
 * @returns {Promise<string | Blob>} dataUrl or Blob
 */
export default async function resizeImage (src, { mime, quality, width, height, cropHeight, cropWidth, objectFit, toBlob }) {
  // Cast options to number
  quality = parseInt(quality) || 90
  width = parseInt(width) || 0
  height = parseInt(height) || 0
  cropWidth = parseInt(cropWidth) || 0
  cropHeight = parseInt(cropHeight) || 0

  if (isDataUrl(src)) {
    mime = parseDataUrl(src).mime
  }
  if (!mime) {
    throw new Error('The `mime` options is required')
  }

  const image = await urlToImage(src)

  // Resize respecting image ratio
  let w = width || image.width
  let h = height || image.height

  if (width && !height) {
    h = Math.round(h * (w / image.width))
  }
  if (!width && height) {
    w = Math.round(w * (h / image.height))
  }

  let canvasWidth = w - cropWidth
  let canvasHeight = h - cropHeight
  let dWidth = w
  let dHeight = h
  let dx = 0
  let dy = 0

  if (objectFit === 'cover') {
    const imageRatio = image.width / image.height
    const canvasRatio = canvasWidth / canvasHeight
    if (imageRatio < canvasRatio) {
      dHeight = dWidth / imageRatio
    } else {
      dWidth = dHeight * imageRatio
    }

    dx = (width - dWidth) * 0.5
    dy = (height - dHeight) * 0.5
  }

  // Create canvas
  const canvas = imageToCanvas(image, {
    width: canvasWidth,
    height: canvasHeight,
    dx,
    dy,
    dWidth,
    dHeight
  })

  // Convert the canvas to the desired format
  return new Promise((resolve) => {
    if (toBlob) {
      canvas.toBlob((blob) => resolve(blob), mime, quality/100)
    } else {
      resolve(canvas.toDataUrl(mime, quality/100))
    }
  })
}
