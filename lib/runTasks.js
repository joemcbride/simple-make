'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _logUtils = require('./logUtils');

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function printResult(start) {
  var end = (0, _moment2.default)();
  var seconds = end.diff(start, 'seconds', true);
  if (_config2.default.format) {
    (0, _logUtils.log)(_config2.default.format(seconds));
  } else {
    (0, _logUtils.log)('\u2728  Done in ' + seconds + 's');
  }
}

var promiseSerial = function promiseSerial(_ref) {
  var tasks = _ref.tasks,
      settings = _ref.settings;

  var start = (0, _moment2.default)();
  return tasks.reduce(function (promise, func) {
    return promise.then(function (result) {
      return func(settings).then(Array.prototype.concat.bind(result));
    });
  }, Promise.resolve([])).then(function (res) {
    printResult(start);
    return res;
  }).catch(function (err) {
    (0, _logUtils.logError)(err || 'Unknown error');
    printResult(start);
    process.exitCode = 1;
  });
};

exports.default = promiseSerial;