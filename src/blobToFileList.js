/**
 * Convert a blob to a FileList
 * @param {Blob} blob
 * @returns {FileList}
 */
export default function blobToFileList (blob) {
  const file = new File([blob], 'unknown', { type: blob.type })
  const dataTransfer = new DataTransfer()
  dataTransfer.items.add(file)
  return dataTransfer.files
}
