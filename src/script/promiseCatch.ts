const promise1 = new Promise((resolve, reject) => {
  throw 'Uh-oh!';
});

promise1
  .then((value) => {
    console.log('value', value);
  })
  .catch((error) => {
  console.error('error', error);
});
// expected output: Uh-oh!
