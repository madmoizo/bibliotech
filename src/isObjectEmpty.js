/**
 * Check if an objet is empty
 * @param {object} value
 * @returns {boolean}
 */
export default function isObjectEmpty (obj) {
  return Object.keys(obj).length === 0
}
