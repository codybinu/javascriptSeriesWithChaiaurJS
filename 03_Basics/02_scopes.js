

if (true) { //Whatever present in side curly braces are block scope. outside curly braces is Global scope
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a) //output: Throws error with a message "a is not defined"
// console.log(b) //output: Throws error with a message "b is not defined"
// console.log(c)//output: 30; // outside a block scope[globally] a variable from block scope should not be accessible.


let a = 300;
if(true){
    let a = 10;
    const b = 20;
    // console.log(`INNER: ${a}`) // output: INNER: 10
}
// console.log(`OUTER: ${a}`) //output: OUTER: 300

//IMPORTANT NOTE:
//GLOBAL SCOPE in node[codes written here in code editor] is different that the code written in console window of browser.


function one(){
    const username = "Binayak"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); //output: will throw an error as "website is not defined"
     two()
}
one(); //output: after this execution in terminal the output will be printed as : Binayak
//So, the thing is that The child function can access the variables of parent function but, vice versa is not possible.

if (true) {
    const username = "Binayak"
    if (username === "Binayak") {
        const website = " youtube"
        console.log(username + website); //output: Binayak youtube
    }
    // console.log(website); //output: will throw an error as "website is not defined"
}

// console.log(username); //output: will throw an error as "username is not defined"


// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5)) //output: 6
function addone(num){
    return num + 1
}

addTwo(5) //output: throws an error as "Cannot access 'addTwo' before initialization"
const addTwo = function(num){
    return num + 2
}