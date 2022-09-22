// // let a = [3, 2, 1];
// // let iter = a[Symbol.iterator]();
// // // Symbol.iterator(이터레이터 심벌)는 이터레이터를 반환하는 메서드

// // console.log(iter.next()); // Object {value: 1, done: false}
// // console.log(iter.next()); // Object {value: 2, done: false}

// let b = ['a', 'b', 'c'];
// let bIter = b[Symbol.iterator]();

// console.log(bIter.next());

// // const typedArray1 = new Int8Array(8)

// // console.log(typedArray1)
// // console.log(typedArray1[0])

// // let range2 = {
// //   from: 1,
// //   to: 5,

// //   [Symbol.iterator]() {
// //     this.current = this.from;
// //     return this;
// //   },

// //   next() {
// //     if (this.current <= this.to) {
// //       return {done: false, value: this.current++ };
// //     } else {
// //       return { done: true }
// //     }
// //   }
// // };


// // for (let num of range2) {
// //   console.log(num);
// // }


// const iterable = {
//   [Symbol.iterator]() {
//     let i = 0
//     // iterator 객체
//     return {
//       next() {
//         while(i < 10) { // i가 10이 될 때까지 반복기 수행
//           return { value: i++, done: false }
//         }
//         return { done: true } // i 가 10이 되면 반복 종료(value 값 생략 가능)
//       }
//     }
//   }
// }

// for(let num of iterable) console.log(num) // 0, 1, ..., 9



















// // let range = {
// //   from: 1,
// //   to: 6,

// //   [Symbol.iterator]() {
// //     this.current = this.from;
// //     return this;
// //   },

// //   next() {
// //     if (this.current <= this.to) {
// //       return {done: false, value: this.current++ };
// //     } else {
// //       return { done: true }
// //     }
// //   }
// // };


// // for (let num of range) {
// //   console.log(num);
// // }


// let map = new Map();

// map.set('1', 'str1');
// map.set('2', 'str2')
// console.log(map.get('1'))
// console.log(map);


let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// 어떤 고객(john, mary)은 여러 번 방문할 수 있습니다.
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

console.log(set);
console.log(set.values);
