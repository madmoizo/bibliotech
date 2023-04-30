/**
 * Extract metadata from a data URL
 * @param {string} dataUrl
 * @returns {object}
 */
export default function parseDataUrl (dataUrl) {
  const [metadata, data] = dataUrl.split(';base64,')
  const mime = metadata.split(':').pop()
  let extension = mime.split('/').pop()
  if (extension === 'jpeg') {
    extension = 'jpg'
  }

  return {
    mime,
    extension,
    data
  }
}
