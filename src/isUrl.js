/**
 * Check if a value is a URL
 * @param {any} value
 * @returns {boolean}
 */
export default function isUrl (value) {
  return /^https?:\/\/[a-zA-Z0-9-_.?=&#]/.test(value)
}
