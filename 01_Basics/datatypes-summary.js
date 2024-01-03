// #primitive datatypes
    // 7 types: string, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 //typeOf --> number
const scoreValue = 100.3 //typeOf --> number

const isLoggedIn = true //typeOf --> boolean
const outSideTemp = null //typeOf --> object
let userEmail;

const id = Symbol('123') //typeOf --> symbol
const anotherId = Symbol('123') //typeOf --> symbol

console.log(id)
console.log(anotherId)

console.log(id === anotherId)

let bigNumber = 76234398478719n //typeOf --> bigint
// #nonprimitives or reference types
    // Array,Objects, Functions

const heros = ["shaktiman", "aaryaman", "junior-g"] //typeOf --> object
let myObj = {
    name: "Binayak",
    age: 29
}                                       //typeOf --> object
const myFunction = function(){          
    console.log("Hello World");
}                                       //typeOf --> function

console.log(typeof myFunction);