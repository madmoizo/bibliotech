import has from './has.js'
import isObject from './isObject.js'

/**
 * Merge an object into an other with optionals exceptions
 * @param {Record<string,unknown>} options
 * @param {Record<string,unknown>} options.source
 * @param {Record<string,unknown>} options.target
 * @param {Record<string,unknown>} [options.exceptions={}]
 * @returns {void}
 */
export default function mergeObject ({ source, target, exceptions = {} }) {
  for (const [key, value] of Object.entries(source)) {
    if (isObject(value)) {
      if (!has(target, key)) {
        target[key] = {}
      }
      mergeObject({ source: value, target: target[key], exceptions: exceptions[key] ?? {} })
    } else {
      if (has(exceptions, key)) {
        if (exceptions[key] !== false) {
          exceptions[key]({ target, key, value })
        }
      } else {
        target[key] = value
      }
    }
  }
}
