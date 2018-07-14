import make from '../src/make'
import config from '../src/config'
import testTask from './test.task'
import asyncTask from './test.asyncTask'

config.name = '[one two]'
config.format = seconds => `Done in ${seconds}s.`

const settings = {
  one: 'value'
}

const tasks = {
  test: testTask,
  async: asyncTask,
  'default': 'async test'
}

make({ tasks, settings })
  .then(after => console.log('after', after)) // eslint-disable-line
