/**
 * Check if a value is an object literal
 * @param {any} value
 * @returns {boolean}
 */
export default function isObject (value) {
  return value?.constructor === Object
}
