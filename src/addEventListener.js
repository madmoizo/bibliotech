/**
 * Add an event listener and provide an handler to remove it
 * @param {EventTarget} element
 * @param {string} event
 * @param {function} listener
 * @param {boolean | EventListenerOptions} options
 * @returns {function} an handler which will remove the event on call
 */
export default function addEventListener (element, event, listener, options) {
  element.addEventListener(event, listener, options)
  return () => {
    element.removeEventListener(event, listener, options)
  }
}
