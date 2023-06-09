/**
 * Convert a cookie header string into an object
 * @param {string} cookieHeader
 * @returns {object}
 */
export default function parseCookieHeader (cookieHeader) {
  return Object.fromEntries(cookieHeader.split(";").map(cookie => cookie.trim().split('=')))
}
