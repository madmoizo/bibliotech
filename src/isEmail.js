/**
 * Check if a value is an email address
 * @param {any} value
 * @returns {boolean}
 */
export default function isEmail (value) {
  return /[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]+/.test(value)
}
