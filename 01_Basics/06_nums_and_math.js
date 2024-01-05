const score = 900; // this is how we generally declare no. where JS bydefault consider it as a number.
// console.log(score);


const balance = new Number(700) //this is where we explicitely define the type of the data
// console.log(balance);

// for better understanding of the available properties try to console the same in browser. 

// console.log(balance.toFixed(2)); //mostly used to restrict the decimal point visibility.


const otherNumber = 123.5567;
// console.log(otherNumber.toPrecision(4)); //becareful while use this functionality


const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); 


// +++++++++++++++++++++++++ Maths +++++++++++++++++++++++

// console.log(Math);
// console.log(Math.asin(4)); // need to learn more

console.log(Math.random())


const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
