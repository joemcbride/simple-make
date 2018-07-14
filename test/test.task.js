import Deferred from '../src/Deferred'

export default function testTask(settings) {

  console.log('settings', settings) // eslint-disable-line

  const deferred = new Deferred()

  console.log('test!') // eslint-disable-line

  // deferred.reject('some error')
  deferred.resolve()

  return deferred.promise
}
