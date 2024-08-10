const accountId = 144553
let accountEmail = "binayak354@gmail.com"
var accountPassword = '12345'
accountCity = 'Bhubaneswar'
let accountState;

// accountId = 2; //reassignment of a const variable is not allowed.

/*
prefer not to use var 
because of issue with block scope and functional scope.
*/

accountEmail = "bb@bb.com"
accountPassword = '67890'
accountCity = 'Cuttack'
console.log('accountId', accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
