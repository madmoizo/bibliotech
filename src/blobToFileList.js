/**
 * Convert a blob to a FileList
 * @param {Blob} blob
 * @param {string} [filename='unknown']
 * @returns {FileList}
 */
export default function blobToFileList (blob, filename='unknown') {
  const file = new File([blob], filename, { type: blob.type })
  const dataTransfer = new DataTransfer()
  dataTransfer.items.add(file)
  return dataTransfer.files
}
