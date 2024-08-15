

if (true) { //Whatever present in side curly braces are block scope. outside curly braces is Global scope
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a) //output: Throws error with a message "a is not defined"
// console.log(b) //output: Throws error with a message "b is not defined"
console.log(c)//output: 30; // outside a block scope[globally] a variable from block scope should not be accessible.


let a = 300;
if(true){
    let a = 10;
    const b = 20;
    console.log(`INNER: ${a}`) // output: INNER: 10
}
console.log(`OUTER: ${a}`) //output: OUTER: 300

//IMPORTANT NOTE:
//GLOBAL SCOPE in node[codes written here in code editor] is different that the code written in console window of browser.
