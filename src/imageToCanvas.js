/**
 * Draw an Image in a canvas
 * @param {HTMLImageElement} image
 * @param {object} options
 * @param {object} options.width
 * @param {object} options.height
 * @param {object} [options.dx]
 * @param {object} [options.dy]
 * @param {object} [options.dWidth]
 * @param {object} [options.dHeight]
 * @returns {HTMLCanvasElement}
 */
export default function imageToCanvas (image, { width, height, dx, dy, dWidth, dHeight }) {
  dx ??= 0
  dy ??= 0
  dWidth ??= width
  dHeight ??= height

  // Create canvas
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  // Draw the original image into the canvas
  const ctx = canvas.getContext('2d')
  ctx.imageSmoothingEnabled = true
  ctx.imageSmoothingQuality = 'high'
  ctx.drawImage(image, dx, dy, dWidth, dHeight)

  return canvas
}
