//singleton : when objects re created with literals they are not singleton[they ll have multiple instances] but, when created with constructors they are singleton.
// Object.create //this is constructor method, this ll create singleton object


//object literals

const mySym = Symbol("key1")// this has to be defined to use the key in Json

console.log(typeof mySym) 

const JsUser = {
    name : "Binayak",
    "full name": "Binayak Bidyasagar",
    [mySym]: "mykey1", // technique to declar the symbol key [part-2]
    age: 29,
    location: "hyderabad",
    email: "binayak@gmail.com",
    hobbies: ["Reading","Writing"],
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(typeof JsUser[mySym]);

// Object.freeze(JsUser) //to restrict the change of the value of the object

JsUser.greeting = function () {
    console.log("Hello Js User")
}
JsUser.greetingTwo = function () {
    console.log(`Hello Js User, from ${this["full name"]}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())