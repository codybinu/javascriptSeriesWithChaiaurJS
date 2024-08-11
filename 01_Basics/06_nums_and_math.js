const score = 900; // this is how we generally declare no. where JS bydefault consider it as a number.
// console.log(score);


const balance = new Number(700) //this is where we explicitely define the type of the data
// console.log(balance);
// console.log(balance.toString()); //returns 700 [but the type is string]
// console.log(balance.toFixed(2)); //returns: 700.00 //mostly used to restrict the decimal point visibility.
// for better understanding of the available properties try to console the same in browser.


const otherNumber = 123.5567;
// console.log(otherNumber.toPrecision(4)); //returns: 123.6 [becareful while use this functionality]


const hundreds = 1000000
// console.log(hundreds.toLocaleString()); //returns:1,000,000 [shows as per the US standard]
// console.log(hundreds.toLocaleString('en-IN')); //returns:10,00,000



// +++++++++++++++++++++++++ Maths +++++++++++++++++++++++

console.log(Math); //returns: Object [Math] {}
console.log(Math.asin(4)); //returns: NaN [need to learn more]

console.log(Math.random())


const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
