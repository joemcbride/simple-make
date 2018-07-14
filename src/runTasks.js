import moment from 'moment'
import { log, logError } from './logUtils'
import config from './config'
import promiseTimeout from './promiseTimeout'

function printResult(start) {
  const end = moment()
  const seconds = end.diff(start, 'seconds', true)
  if(config.format) {
    log(config.format(seconds))
  } else {
    log(`✨  Done in ${seconds}s`)
  }
}

const promiseSerial = ({ tasks, settings }) =>{
  const start = moment()
  return tasks.reduce((promise, func) =>
    promise.then(result => promiseTimeout(config.taskTimeout, func(settings)).then(Array.prototype.concat.bind(result))),
    Promise.resolve([]))
    .then(res => {
      printResult(start)
      return res
    })
    .catch(err => {
      logError(err || 'Unknown error')
      printResult(start)
      process.exitCode = 1
    })
}

export default promiseSerial
