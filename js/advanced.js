let arr = [3,4,5,6,4,9,7,8,9,4,5,8];
let num_d_3 = arr.filter((ele)=> ele % 3 == 0);
let sum = arr.reduce((r,ele)=>r + ele)
let new_arr = arr.map(ele=>ele*2);
arr.sort().reverse();
console.log(num_d_3);
console.log("Sum :",sum);
console.log(new_arr);
console.log(arr);