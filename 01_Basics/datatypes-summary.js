//there is 2 types of datatypes, categorized as per the storing behaviour in memory and accessing them 
// from memory

// #primitive datatypes
    // 7 types: string, Number, Boolean, null, undefined, Symbol, BigInt

/* 
JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.
*/

const score = 100 //typeOf --> number
const scoreValue = 100.3 //typeOf --> number

const isLoggedIn = true //typeOf --> boolean
const outSideTemp = null //typeOf --> object
let userEmail;

const id = Symbol('123') //typeOf --> symbol
const anotherId = Symbol('123') //typeOf --> symbol

// console.log(id) //returns: Symbol(123)
// console.log(anotherId) //returns: Symbol(123)

// console.log(id === anotherId) //returns: false

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

// console.log(typeof score);  // returns: number
// console.log(typeof scoreValue); // returns: number
// console.log(typeof isLoggedIn); // returns: boolean
// console.log(typeof outSideTemp); // returns: object
// console.log(typeof userEmail); // returns: undefined
// console.log(typeof anotherId); // returns: symbol
// console.log(typeof bigNumber); // returns: bigint
// console.log(typeof heros); // returns: object
// console.log(typeof myObj); // returns: object
// console.log(typeof myFunction); // returns: function




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//there are 2 types of memories
    //1. stack (all Primitive datatype uses stack)
    //2. Heap (all nonPrimitive datatype uses Heap)

    let myCodingName = "codybinu"
    let anotherName = myCodingName

    anotherName = "bincypher"
    console.log(`My Coding Name is ${myCodingName}`); //returns: My Coding Name is codybinu
    console.log(`My another Name is ${anotherName}`); //returns: My another Name is bincypher

    let userOne = {
        email : "brb@bb.com",
        upi : "brb@ybl"
    }

    let userTwo = userOne

    userTwo.email = "rte@bb.com"

    console.log(userOne.email); //returns: rte@bb.com
    console.log(userTwo.email); //returns: rte@bb.com