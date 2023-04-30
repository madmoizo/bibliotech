/**
 * Add a leading zero to a single digit number
 * @param {string|Number} value
 * @returns {string}
 */
export default function prependZero (value) {
  return `${value}`.padStart(2, '0')
}
