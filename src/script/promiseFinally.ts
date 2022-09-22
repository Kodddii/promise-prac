function check() {
  return new Promise((resolve, reject) => {
    if(Math.random() > 0.5) {
      resolve('check');
    } else {
      reject('error')
    }
  })
}
check()
  .then((values) => {
    console.log(values);
  })
  .catch((reason) => {
    console.log(reason);
  })
  .finally(() => {
    console.log('check completed')
  })