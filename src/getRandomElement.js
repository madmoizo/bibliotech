/**
 * Get a random element from an array
 * @param {Array<any>} array
 * @returns {any}
 */
export default function getRandomElement (array) {
  return array[Math.floor(Math.random() * array.length)]
}
