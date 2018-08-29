'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.log = log;
exports.logError = logError;

var _chalk = require('chalk');

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /* eslint no-console: 0 */


function log() {
  var _console;

  for (var _len = arguments.length, msgs = Array(_len), _key = 0; _key < _len; _key++) {
    msgs[_key] = arguments[_key];
  }

  (_console = console).log.apply(_console, _toConsumableArray(['' + _config2.default.name].concat(msgs)));
}

function logError() {
  for (var _len2 = arguments.length, msgs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    msgs[_key2] = arguments[_key2];
  }

  console.error(_chalk.red.apply(undefined, _toConsumableArray(['' + _config2.default.name].concat(msgs))));
}