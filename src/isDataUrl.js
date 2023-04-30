/**
 * @param {string} value
 * @returns {boolean}
 */
export default function isDataUrl (value) {
  return /^data:.+;base64,/.test(value)
}
