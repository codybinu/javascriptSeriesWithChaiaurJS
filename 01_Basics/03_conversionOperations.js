let score = "33wer"

// console.log(typeof score)

let valueInNumber = Number(score); //converting to number

// console.log(valueInNumber);
// console.log(typeof valueInNumber)

//convertion results to number written below.
//"33" => 33
//"33abs" => NaN
// true => 1; false => 0
//NaN => is a number type in JS.

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn); //converting to Boolean
// console.log(booleanIsLoggedIn)

//convertion results to Boolean written below.
// 1=> true; 0=>false
//""=> false
//"Binayak" => true

let someNumber = 33

let stringNumber = String(someNumber) //converting to String
// console.log(stringNumber)
// console.log(typeof stringNumber);


//******************* Opertions ******************************

let value = 3
let negvalue = -value
// console.log(negvalue)

// console.log(2**3); //this means 2 to the power 3

let str1 = "hello "
let str2 = "binayak"
let str3 = str1 + str2;
// console.log(str3);

// console.log("1"+2+2)
// console.log(1+2+"2")

//****************not recommend to use in code.*****************

// console.log(+true); //returns : 1
// console.log(+""); //returns : 0

let num1, num2, num3;
num1 = num2 = num3 = 2+2;

//prefix and postfix operator. [reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment]
let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`); // Expected output: "x:4, y:3"

let a = 3;
const b = ++a;
console.log(`a:${a}, b:${b}`); // Expected output: "a:4, b:4"




