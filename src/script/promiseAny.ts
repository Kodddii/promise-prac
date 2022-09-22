const anySuccess = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, '1')
})
const anySuccess2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, '2')
})
const anySuccess3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, '3')
})
const anySuccess4 = new Promise((resolve, reject) => {
  resolve('4')
})
const anySuccess5 = new Promise((resolve, reject) => {
  resolve('5')
})
const anyFailure = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, 'reject 1')
});
const anyFailure2 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, 'reject 2')
});

const promises = [anySuccess, anySuccess2, anyFailure, anyFailure2];

Promise.any(promises)
  .then((result) => {
    console.log('resolve', result);
  }).catch((reason) => {
    console.log('reject', reason)
  })
