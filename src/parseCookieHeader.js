/**
 * Convert a cookie header string into an object
 * @param {string} cookieHeader
 * @returns {Record<string,string>}
 */
export default function parseCookieHeader (cookieHeader) {
  return Object.fromEntries(cookieHeader.split(";").map(cookie => cookie.trim().split('=')))
}
