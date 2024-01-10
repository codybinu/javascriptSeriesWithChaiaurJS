
////// var in scope concept starts from here
if (true) {
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a)
// console.log(b)
console.log(c) // outside a block scope[globally] a variable from block scope should not be accessible.
////// var in scope concept ends here