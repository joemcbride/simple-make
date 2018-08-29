"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Deferred = function Deferred(complete) {
  var _this = this;

  _classCallCheck(this, Deferred);

  if (complete) {
    this.promise = Promise.resolve();
  } else {
    this.promise = new Promise(function (resolve, reject) {
      _this.resolve = resolve;
      _this.reject = reject;
    });
  }
};

exports.default = Deferred;