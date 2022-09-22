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


// const pErr = new Promise((resolve, reject) => {
//   reject("Always fails");
// });

// const pSlow = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, "Done eventually");
// });

// const pFast = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "Done quick");
// });

// Promise.any([pErr, pSlow, pFast]).then((value) => {
//   console.log(value)
// })

// const failure = new Promise((resolve, reject) => {
//   reject("Always fails");
// });

// Promise.any([failure]).catch((err) => {
//   console.log(err);
// });

// const promise1 = new Promise((resolve, reject) => {
//   throw 'Uh-oh!';
// });

// console.log(promise1);
// promise1.catch((reason) => {
//   console.error(reason);
// });

// const promise1 = Promise.resolve(123);

// promise1.then((value) => {
//   console.log(value);
//   // expected output: 123
// });
// const p1 = Promise.resolve(2).then(() => 77, () => {})
// const p2 = Promise.resolve(2).finally(() => 77)
// console.log(p1);
// console.log(p2);

// let isLoading = true;

// fetch(myRequest)
//   .then((response) => {
//     const contentType = response.headers.get("content-type");
//     if (contentType && contentType.includes("application/json")) {
//       return response.json();
//     }
//     throw new TypeError("Oops, we haven't got JSON!");
//   })
//   .then((json) => {
//     /* process your JSON further */
//   })
//   .catch((error) => {
//     console.error(error); // this line can also throw, e.g. when console = {}
//   })
//   .finally(() => {
//     isLoading = false;
//   });

// const pErr = new Promise((resolve, reject) => {
//   reject("Always fails");
// });

// const pSlow = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, "Done eventually");
// });

// const pFast = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "Done quick");
// });

// const failure = new Promise((resolve, reject) => {
//   reject("Always fails");
// });

// const p1 = new Promise((resolve, reject) => {
//   resolve('1')
// })

// const p2 = new Promise((resolve, reject) => {
//   resolve('2')
// })
// const p3 = new Promise((resolve, reject) => {
//   reject('err')
// })




const prom1 = new Promise((resolve, reject) => {
  reject('2')
  resolve('1')
})
prom1.then((value) => {
  console.log(value);
}).catch((reson) => {
  console.log(reson);
})
