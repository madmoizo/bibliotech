/**
 * Convert an array of objects to a Map
 * @param {Array<Record<string,unknown>>} array
 * @param {string} key
 * @returns {Map} hastable using key's value as identifier for each object of the array
 */
export default function arrayToMap (array, key) {
  const map = new Map()
  for (const item of array) {
    map.set(item[key], item)
  }
  return map
}
