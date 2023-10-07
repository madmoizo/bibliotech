/**
 * Enable or disable an interval based on document visibility
 * @returns {function} return the intervalId for a manual clearInterval
 */
export default function smartSetInterval (...params) {
  let intervalId = setInterval(...params)

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === 'hidden') {
      clearInterval(intervalId)
    } else if (document.visibilityState === 'visible') {
      intervalId = setInterval(...params)
    }
  })

  return () => intervalId
}
