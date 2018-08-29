'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = make;

var _toTasks = require('./toTasks');

var _toTasks2 = _interopRequireDefault(_toTasks);

var _runTasks = require('./runTasks');

var _runTasks2 = _interopRequireDefault(_runTasks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function make(_ref) {
  var tasks = _ref.tasks,
      settings = _ref.settings,
      complete = _ref.complete;

  var args = process.argv.slice(2);

  var list = (0, _toTasks2.default)(tasks, args.length > 0 ? args[0] : 'default');
  return (0, _runTasks2.default)({ tasks: list, complete: complete, settings: settings || {} });
}