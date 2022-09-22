let array = [];
for( let i = 1; i<=100; i++) {
  array.push(i);

}
array.map((v) =>{
  return v*2
})

const a = () => {

}

async function b(n) {
  const c = async (m) => m+n
  
  return c
}


async function d() {
  return new Promise((resolve) => {
    resolve(1);
  })
}
