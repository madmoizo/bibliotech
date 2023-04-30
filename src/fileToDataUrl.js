/**
 * Convert a File to a data URL
 * @param {File} file
 * @returns {string} data URL
 */
export default async function fileToDataUrl (file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.addEventListener('load', async () => {
      resolve(reader.result)
    })
  })
}
