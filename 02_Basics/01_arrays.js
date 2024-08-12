//learn more about arrays at : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
const myArr = [0,1,2,3,4]

const myArr2 = new Array(1,2,3,4,5)
console.log(myArr2);

// array methods
myArr2.push(7)
console.log(myArr2); // adds 7 to the end of the array

/*
Difference between splice and slice?
1. Slice only includes starting index and exculdes ending index where splice includes both . 
2. slice doesnot change the original array where as splice modifies the original array.
*/