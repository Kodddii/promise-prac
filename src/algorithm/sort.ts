const arr = [9,3,2,3,5,6,7,1,3,0,-1]

let temp;
let aa;
let bb

for (let a=0; a<arr.length; a++) {
  for (let i = 0; i<arr.length; i++) {
    aa = arr[i]
    if (arr[i] < arr[i+1]) {
      arr[i] = arr[i+1]
      arr[i+1] = aa
    }
  }
}



console.log(arr);