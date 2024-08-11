// console.log("2" > 1)  //returns : true 
// console.log("02" > 1) //returns : true
//In the above comparison JS changing the "2" string datatype to number.



//***********Avoid using below type of comparisons************** 
console.log(null > 0) //returns : false
console.log(null == 0) //returns : false
console.log(null >= 0) //returns : true

// the reason is that an equality check  == and comparison > < >= <= works differently.
// comparisons convert null to a number, treating it as 0.
// that's why null>=0 is true and null>0 is false

console.log(undefined == 0); //returns : false
console.log(undefined > 0); //returns : false
console.log(undefined < 0); //returns : false



//*********How to use comparisons effectively *************
// We use === to do strict check, which will check the values along with the datatype.
console.log("2" === 2); //returns false