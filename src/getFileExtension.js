import isUrl from './isUrl.js'
import isDataUrl from './isDataUrl.js'
import parseDataUrl from './parseDataUrl.js'


/**
 * Retrieve the file extension from an URL or data URL
 * @param {string} file
 * @returns {string | null}
 */
export default function getFileExtension (file) {
  if (isUrl(file)) {
    return file.split(/[#?]/)[0].split('.').pop().trim()
  }
  if (isDataUrl(file)) {
    return (parseDataUrl(file)).extension
  }

  return null
}
