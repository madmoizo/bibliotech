import isDate from './isDate.js'


/**
 * Transform a dictionary into a stringified URL search params
 * @param {object} searchParams
 * @returns {string}
 */
export default function stringifySearchParams (searchParams) {
  searchParams ??= {}

  let requestUrl = new URLSearchParams(
    Object.fromEntries(
      Object.entries(searchParams)
        .filter(([key, value]) => value !== undefined)
        .map(([key, value]) => {
          if (isDate(value)) {
            value = value.toISOString()
          }
          return [key, value]
        })
    )
  ).toString()

  // Add leading '?'
  if (requestUrl) {
    requestUrl = `?${requestUrl}`
  }

  return requestUrl
}
