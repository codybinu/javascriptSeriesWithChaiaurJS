// const tinderUser = new Object(); //this kind of declaration of object will create a singleton object
const tinderUser = {}; //this kind of declaration will create a non-singleton object
//both kind of declaration mentioned above will give same return.[will create an empty object]

tinderUser.id = "123abc"
tinderUser.name = "denish"
tinderUser.isLoggedin = false

// console.log(tinderUser); //output: { id: '123abc', name: 'denish', isLoggedin: false }

const regularUser = {
    email: "damian@gmail.com",
    fullName: {
        userFullname: {
            firstName: "Damian",
            lastName: "Smith"
        }
    }
}

// console.log(regularUser["fullName"]["userFullname"]["firstName"]); //output: Damian

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}


// const obj3 = {...obj1,...obj2}
const obj3 = Object.assign({},obj1,obj2); 
// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// console.log(Object.keys(tinderUser)); //output: [ 'id', 'name', 'isLoggedin' ]
// console.log(Object.values(tinderUser)); //output: [ '123abc', 'denish', false ]
// console.log(Object.entries(tinderUser)); //output: [ [ 'id', '123abc' ], [ 'name', 'denish' ], [ 'isLoggedin', false ] ]
// console.log(tinderUser.hasOwnProperty('isLoggedin')); //output: true


const course = {
    coursename : 'Physics',
    duration : '6 months',
    skills : ['maths','physics'],
    isEnrolled : true
}

const {coursename,duration: timeperiod,skills,isEnrolled} = course //destructuring


console.log(timeperiod);