const successSettled = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, '1')
})
const success2Settled = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, '2')
})
const success3Settled = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, '3')
})
const success4Settled = new Promise((resolve, reject) => {
  resolve('4')
})
const success5Settled = new Promise((resolve, reject) => {
  resolve('5')
})
const failureSettled = new Promise((resolve, reject) => {
  setTimeout(reject, 6000, '1')
});
// const failure2Settled = new Promise((resolve, reject) => {
//   setTimeout(reject, 3000, '2')
// });

// const settledPromises = [successSettled, success2Settled, failureSettled, failure2Settled]
const settledSuccessPromises = [success2Settled, success3Settled, success4Settled, failureSettled];

// Promise.allSettled(settledPromises)
//   .then((result) => {
//     console.log(result);
//     console.log(result[0].status);
//     if(result[0].status === 'fulfilled') {
//       console.log(result[0].value)
//     }
//   })

  Promise.allSettled(settledSuccessPromises)
    .then((result) => {
      console.log(result);
    })


  Promise.allSettled(settledSuccessPromises)
  .then((results) => {
    results.map((result) => {
      if(result.status === 'fulfilled') {
        console.log('value', result.value);
        return result.value
      } else if(result.status === 'rejected') {
        console.log('reason', result.reason);
        return result.reason
      }
      
    })
  })