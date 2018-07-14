
function errors(resolve, reject) {
    // throw new Error('some error')
    resolve('abcd')
    // reject('something')
}

export default function asyncTask(settings) {
  return new Promise((resolve, reject) => {
    //   reject('failed')
    console.log('async settings', settings) // eslint-disable-line
    // resolve('done')

    setTimeout(()=> errors(resolve, reject), 1000)
  })
}
