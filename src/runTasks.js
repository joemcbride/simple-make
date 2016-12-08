import moment from 'moment';
import { log, logError } from './logUtils';
import config from './config';

export default function runSerial({tasks, complete}) {
  const start = moment();
  return new Promise((resolve, reject) => {
    let hasError = false;
    tasks.reduce((cur, next) => {
      if(hasError) {
        return null;
      }
      return cur.then(next);
    }, Promise.resolve()).then(() => {
      resolve({ start });
    }, (error) => {
      hasError = true;
      logError(error);
      reject({ start, error });
    });
  })
  .then(res => {
    const end = moment();
    const seconds = end.diff(res.start, 'seconds', true);
    if(config.format) {
      log(config.format(seconds));
    } else {
      log(`✨  Done in ${seconds}s`);
    }
    return res;
  }, res => {
    const end = moment();
    const seconds = end.diff(res.start, 'seconds', true);

    process.exitCode = 1;

    if(config.format) {
      log(config.format(seconds));
    } else {
      log(`✨  Done in ${seconds}s`);
    }
    return res;
  });
}