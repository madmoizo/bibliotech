/**
 * Check if a date is after an other
 * @param {Date} date
 * @param {Date} dateToCompare
 * @returns {boolean}
 */
export default function isAfterDate (date, dateToCompare) {
  return date.getTime() > dateToCompare.getTime()
}
