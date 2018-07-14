export default function promiseTimeout(ms, promise) {

    let id

    // Create a promise that rejects in <ms> milliseconds
    let timeout = new Promise((resolve, reject) => {
      id = setTimeout(() => {
        clearTimeout(id)
        reject('Timed out in '+ ms + 'ms.')
      }, ms)
    })
  
    // Returns a race between our timeout and the passed in promise
    return Promise.race([
      promise,
      timeout
    ]).then(result => {
      clearTimeout(id)
      return result
    })
  }