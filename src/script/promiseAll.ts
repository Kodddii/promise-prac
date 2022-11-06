// const p1 = Promise.resolve(3);
// const p2 = 1337;
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//   }, 100);
// });

// const p = Promise.all([1, 2, 3]);
// // this will be counted as if the iterable passed contains only the resolved promise with value "444", so it gets fulfilled
// const p2 = Promise.all([1, 2, 3, Promise.resolve(444)]);
// // this will be counted as if the iterable passed contains only the rejected promise with value "555", so it gets rejected
// // const p3 = Promise.all([1, 2, 3, Promise.reject(555)]);

// // using setTimeout we can execute code after the queue is empty
// setTimeout(() => {
//   console.log(p);
//   console.log(p2);
//   // console.log(p3);
// });

// const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

// const p = Promise.all(resolvedPromisesArray);
// // immediately logging the value of p
// console.log(p);

// // using setTimeout we can execute code after the queue is empty
// setTimeout(() => {
//   console.log('the queue is now empty');
//   console.log(p);
// });

// const mixedPromisesArray = [Promise.resolve(33), Promise.reject(44)];
// const p = Promise.all(mixedPromisesArray);
// console.log(p);
// setTimeout(() => {
//   console.log('the queue is now empty');
//   console.log(p);
// });

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('one'), 1000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('two'), 2000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('three'), 3000);
// });
// const p4 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('four'), 4000);
// });
// const p5 = new Promise((resolve, reject) => {
//   reject(new Error('reject'));
// });

// // Using .catch:
// Promise.all([p1, p2, p3, p4, p5])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.error(error.message)
//   });



// Promise.allsettled();
// Promise.allSettled([
//   Promise.resolve(33),
//   new Promise((resolve) => setTimeout(() => resolve(66), 0)),
//   99,
//   Promise.reject(new Error('an error'))
// ])
// .then((values) => console.log(values));

const success = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, '1')
})
const success2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, '2')
})
const success3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, '3')
})
const success4 = new Promise((resolve, reject) => {
  resolve('4')
})
const success5 = new Promise((resolve, reject) => {
  resolve('5')
});
// const failure = new Promise((resolve, reject) => {
//   setTimeout(reject, 6000, '1')
// });
// const failure2 = new Promise((resolve, reject) => {
//   setTimeout(reject, 3000, '2')
// });

// const promises = [success, success2 , success3, failure, failure2]
// const resolvePromisesSetTimeout = [success, success2, success3]

// const rejectPromises = [failure, failure2];

(async () => {
  const resolvePromises = [success, success2, success4, success5]
  let database: any[] = [];
  // console.log(resolvePromises);
  await Promise.all(resolvePromises)
    .then((values) => {
      values.map((data:any) => {
        database.push(data);
      })
    })
    .catch((reason) => {
      console.log('reject', reason)
    })


  console.log(database);
})()

