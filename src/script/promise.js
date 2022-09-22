// let arrayLike = {
//   0: "Hello",
//   1: "World",
//   length: 2
// };

// let arr = Array.from(arrayLike); // (*)
// console.log(arr);

let range = {
  from: 1,
  to: 5
}

range[Symbol.iterator] = function() {
  return {
    current: this.from,
    last: this.to,

    next() {
      if (this.current <=this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
};

console.log(range);
for (let num of range) {
  console.log(num);
}

// range 자체를 iterator

// let range2 = {
//   from: 1,
//   to: 5,

//   [Symbol.iterator]() {
//     this.current = this.from;
//     return this;
//   },

//   next() {
//     if (this.current <= this.to) {
//       return {done: false, value: this.current++ };
//     } else {
//       return { done: true }
//     }
//   }
// };


// for (let num of range2) {
//   console.log(num);
// }

let str = 'hello';

let strIterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
}