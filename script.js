function debounce(callback, delay, immediate = false) {
  let timerId; // To store the timeout ID
  let isFirstCall = true; // Track first immediate call

  return function (...args) {
    const context = this; // Preserve 'this' context

    // If immediate is true and it's the first call (or delay has passed)
    const callNow = immediate && (isFirstCall || !timerId);

    // Clear previous timer
    clearTimeout(timerId);

    // If immediate mode: call immediately and reset the lock
    if (callNow) {
      callback.apply(context, args);
      isFirstCall = false;
      // Prevent next calls until delay has passed
      timerId = setTimeout(() => {
        timerId = null;
      }, delay);
    } else {
      // Otherwise, call after delay since last trigger
      timerId = setTimeout(() => {
        callback.apply(context, args);
      }, delay);
    }
  };
}

module.exports = debounce;
