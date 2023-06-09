/**
 * Get date timestamp in second
 * @param {Date} date
 * @returns {number}
 */
export default function getTimestampInSeconds (date) {
  return Math.floor(date.getTime() / 1000)
}
