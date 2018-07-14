export default class Deferred {
  constructor(complete) {
    if (complete) {
      this.promise = Promise.resolve()
    }
    else {
      this.promise = new Promise((resolve, reject)=> {
        this.resolve = resolve
        this.reject = reject
      })
    }
  }
}