//Immediately Invoked Function Expression (IIFE);


//NAMED IIFE
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); //output: DB CONNECTED --> this is IIFE, and we use this to prevent the child function getting polluted by their parent function.


// --> semicolon after IIFE is mandatory or else the later codes will give error.



//UNNAMED IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Binayak'); //output: DB CONNECTED TWO Binayak