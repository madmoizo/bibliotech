import isUrl from './isUrl.js'
import isDataUrl from './isDataUrl.js'


/**
 * Check if a value is a URL or data URL
 * @param {string} value
 * @returns {boolean}
 */
export default function isFile (value) {
  return isUrl(value) || isDataUrl(value)
}
