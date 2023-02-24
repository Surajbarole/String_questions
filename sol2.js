// Problem 2 : Given an array of string count the overall total number of characters

let arr=["suraj","anurag","pulkit","janta","bababa"]
let sum=0;
for(let i=0;i<arr.length;i++){
  sum+=arr[i].length
}
console.log(sum)