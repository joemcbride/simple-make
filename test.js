import make from './src/make'
import config from './src/config'
import testTask from './test.task'

config.name = '[one two]'
config.format = seconds => `Done in ${seconds}s.`

const settings = {
  one: 'value'
}

const tasks = {
  test: testTask,
  'default': 'test'
}

make({ tasks, settings })