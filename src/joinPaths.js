/**
 * Join pathnames
 * @param {...string} paths
 * @returns {string}
 */
export default function joinPaths (...paths) {
  return paths
    .filter(path => path)
    .join('/')
    // Remove duplicate slashs
    // https://regex101.com/r/LtXqoZ/1
    .replace(/([^:]\/)\/+/g, '$1')
}
