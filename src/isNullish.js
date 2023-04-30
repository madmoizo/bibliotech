/**
 * Check if a value is nullish
 * @param {any} value
 * @returns {boolean}
 */
export default function isNullish (value) {
  return value === null || value === undefined
}
