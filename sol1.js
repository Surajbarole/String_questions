// Problem 1 : Given a string count the number of words in that string

let str="Suraj baba"
let count=0;
for(let i=0;i<=str.length-1;i++){
  if(str[i]==" "){
    count++
  }
}
if(count!=0){
  console.log(count)
}else{
  console.log("0")
}