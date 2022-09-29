const myIterable = {
  *[Symbol.iterator]() {
    yield 4;
    yield 2;
    yield 1;
  }
}

for (const value of myIterable) {
  console.log(value);
}
