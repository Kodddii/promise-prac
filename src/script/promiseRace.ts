const raceSuccess = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, '1')
})
const raceSuccess2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, '2')
})
const raceSuccess3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, '3')
})
const raceSuccess4 = new Promise((resolve, reject) => {
  resolve('4')
})
const raceSuccess5 = new Promise((resolve, reject) => {
  resolve('5')
})
const raceFailure = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, '1')
});
const raceFailure2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000, '2')
});

// const promises = [success, success2 , success3, failure, failure2]
// const resolvePromisesSetTimeout = [success, success2, success3]
const raceResolvePromises = [raceSuccess, raceSuccess2, raceSuccess3, raceFailure, raceFailure2]
// const rejectPromises = [failure, failure2];

Promise.race(raceResolvePromises)
  .then((values) => {
    console.log('resolve', values)
  }).catch((reason) => {
    console.log('reject', reason);
    
    // console.log('reject', reason) 
  });