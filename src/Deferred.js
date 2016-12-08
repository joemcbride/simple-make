export default class Deferred {
  constructor(complete) {
    this.promise = new Promise((resolve, reject)=> {
      this.resolve = resolve;
      this.reject = reject;
    });

    if(complete) this.resolve();
  }
}