'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = promiseTimeout;
function promiseTimeout(ms, promise) {

  var id = void 0;

  // Create a promise that rejects in <ms> milliseconds
  var timeout = new Promise(function (resolve, reject) {
    id = setTimeout(function () {
      clearTimeout(id);
      reject('Timed out in ' + ms + 'ms.');
    }, ms);
  });

  // Returns a race between our timeout and the passed in promise
  return Promise.race([promise, timeout]).then(function (result) {
    clearTimeout(id);
    return result;
  });
}