const name = "Binayak"
const repoCount = 17

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //string interpolation OR template literal

const gameName = new String('Binayak')  // for better understanding of the available properties try to console the same in browser. 
//Example
console.log(gameName.length); //returns 7;
console.log(gameName.toUpperCase()); //returns: BINAYAK
console.log(gameName.charAt(3)); //returns: a
console.log(gameName.indexOf('n')); //returns: 2

const newString = gameName.substring(0,4);  
console.log(newString); //returns: Bina

const anotherString = gameName.slice(-7,4);
console.log(anotherString); //returns: Bina

