'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toTasks;
function tasksFromObject(obj, target) {
  if (typeof target === 'function') {
    return target;
  }

  var res = obj[target];

  if (typeof res === 'function') {
    return res;
  }

  var actions = res;

  if (typeof res === 'string') {
    actions = res.split(' ');
  }

  return actions.reduce(function (cur, next) {
    return cur.concat(tasksFromObject(obj, next));
  }, []);
}

function toTasks(obj, target) {
  return [].concat(tasksFromObject(obj, target));
}