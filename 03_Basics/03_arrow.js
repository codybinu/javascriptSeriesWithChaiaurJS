const user = {
    username: "Binayak",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); 
    }

}

// user.welcomeMessage(); //output: Binayak , welcome to website
// user.username = "sam"
// user.welcomeMessage(); //output: sam , welcome to website

// console.log(this); //output: {} --> this will return empty here in node but it will return "window" object in browser console.

// function chai(){
//     let username = "Binayak"
//     console.log(this.username); //output: undefined
// }

// chai()

// const chai = function () {
//     let username = "Binayak"
//     console.log(this.username); //output: undefined
// }

// chai()

// const chai =  () => {
//     let username = "Binayak"
//     console.log(this); //output: {}
// }


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2 //returns 7
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "Binayak"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach() //Example of arrow function