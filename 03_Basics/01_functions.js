
//while defining a function we use PARAMETERS and while calling/executing we pass the ARGUMENTS

// function addTwoNumbers(one,two){
//     console.log(one+two);
// }
function addTwoNumbers(one,two){
    return one+two;
}

const result = addTwoNumbers(3,4)

// console.log("Result: ",result);

function loginUserMessage(username = "sam") {
  if(!username){
    return "Please enter username.";
  }
    return `${username} just loggedin`
    
}

console.log(loginUserMessage("Binayak"))