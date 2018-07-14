# simple-make

A simple promise based task runner.

```javascript
import make from 'simple-make/lib/make';
import config from 'simple-make/lib/config';
import aTask from './aTask';

config.name = '[my project]'
config.format = seconds => `Done in ${seconds}s.`

const settings = {
  one: 'value'
}

const tasks = {
  test: testTask,
  'default': 'test'
}

make({ tasks, settings })
```

```javascript
export default function aTask(settings) {
  return new Promise((resolve, reject) => {
    resolve('done')
  })
}
```