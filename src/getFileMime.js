import isUrl from './isUrl.js'
import isDataUrl from './isDataUrl.js'
import parseDataUrl from './parseDataUrl.js'

const mimeSearch = {
  webp: 'image/webp',
  jpg: 'image/jpeg',
  png: 'image/png',
  svg: 'image/svg+xml',
  bmp: 'image/bmp',
  zip: 'application/zip',
  xml: 'application/xml',
  pdf: 'application/pdf',
  mpeg: 'video/mpeg',
  csv: 'text/csv'
}

/**
 * Retrieve the file extension from an URL or data URL
 * @param {string} file
 * @returns {string | null}
 */
export default function getFileMime (file) {
  if (isUrl(file)) {
    const extension = file.split(/[#?]/)[0].split('.').pop().trim()
    return mimeSearch[extension] ?? null
  }
  if (isDataUrl(file)) {
    return parseDataUrl(file).mime
  }

  return null
}
