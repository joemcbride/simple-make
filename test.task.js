import Deferred from './src/Deferred';

export default function testTask() {
  const deferred = new Deferred();

  console.log('test!'); // eslint-disable-line

  // deferred.reject('some error');
  deferred.resolve();

  return deferred.promise;
}