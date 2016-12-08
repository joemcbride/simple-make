# simple-make

A simple promise based task runner.

```javascript
import make from 'simple-make/lib/make';
import config from 'simple-make/lib/config';
import aTask from './aTask';

config.name = '[my project]';
config.format = seconds => `Done in ${seconds}s.`;

const tasks = {
  test: aTask,
  'default': 'test'
};

make({ tasks });
```

```javascript
import Deferred from 'simple-make/lib/Deferred';

export default function aTask() {
  const deferred = new Deferred();

  // deferred.reject('some error');
  deferred.resolve();

  return deferred.promise;
}
```