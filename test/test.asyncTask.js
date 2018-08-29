
function errors(resolve, reject) {
    // throw new Error('test.asyncTask error')
    resolve('test.asyncTask')
    // reject('test.asyncTask reject')
}

export default function asyncTask(settings) {
  return new Promise((resolve, reject) => {
    //   reject('failed')
    console.log('async settings', settings) // eslint-disable-line
    // resolve('done')

    setTimeout(()=> errors(resolve, reject), 1000)
  })
}
