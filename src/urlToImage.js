/**
 * Convert an URL to a javascript Image
 * @param {string} src - URL or data URL
 * @returns {HTMLImageElement}
 */
export default function urlToImage (src) {
  return new Promise((resolve) => {
    const image = new Image()
    image.crossOrigin = 'anonymous' // Avoid CORS error
    image.src = src
    image.onload = () => {
      resolve(image)
    }
  })
}
