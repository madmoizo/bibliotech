/**
 * Check if a value is a Date
 * @param {any} value
 * @returns {boolean}
 */
export default function isDate (value) {
  return value instanceof Date && !Number.isNaN(value.valueOf())
}
