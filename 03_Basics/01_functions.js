
//while defining a function we use PARAMETERS and while calling/executing we pass the ARGUMENTS

// function addTwoNumbers(one,two){
//     console.log(one+two);
// }
function addTwoNumbers(one,two){
    return one+two;
}

const result = addTwoNumbers(3,4)

// console.log("Result: ",result); //output: Result:  7

 /*For the above example
 addTwoNumbers --> function reference
 addTwoNumbers() --> function execution
 addTwoNumbers(){} --> function definition */

 /*
 -----Difference between parameters & arguments-----
 --> the values passed inside paranthesis while defining the functions are called as parameters. EX: function example(a,b){};
 --> the values passed inside paranthesis while calling back/ executing the functions are arguments. EX: example(a,b)
 */ 


function loginUserMessage(username = "sam") { //Here sam is the predefined/default username;
  if(!username){
    return "Please enter username.";
  }
    return `${username} just loggedin`;
    
}

// console.log(loginUserMessage()); //output: sam just loggedin
// console.log(loginUserMessage("Binayak")) //output: Binayak just loggedin


function calculateCartPrice(...prices) { //"..." called as Rest operator.
  return prices;
}

console.log(calculateCartPrice(100,400,399,477)); //output: [ 100, 400, 399, 477 ]

const user ={
  username: 'Binayak',
  price: 279
}

function handleObjet(anyObject){
  console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObjet(user); //output: Username is Binayak and price is 279

const myNewArray = [200,300,488.279];
function returnSecondValue(getArray){
  return getArray[1];
}
console.log(returnSecondValue(myNewArray)); //output: 300