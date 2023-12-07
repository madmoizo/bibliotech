/**
 * Import script on runtime
 * @param {string} tagName
 * @param {object} attributes
 * @param {function} onload
 * @returns {HTMLElement}
 */
export default function addHeadTag (tagName, attributes, onload = null) {
  // Do not add an already existing id
  if (
    attributes.id &&
    document.getElementById(attributes.id)
  ) {
    return null
  }

  const el = document.createElement(tagName)
  document.head.appendChild(el)

  if (onload) {
    el.onload = onload
  }

  for (const attributeName in attributes) {
    el[attributeName] = attributes[attributeName]
  }

  return el
}
