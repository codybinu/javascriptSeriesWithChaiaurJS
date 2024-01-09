// const tinderUser = new Object(); //this kind of declaration of object will create a singleton object
const tinderUser = {}; //this kind of declaration will create a non-singleton object
//both kind of declaration mentioned above will give same return.[will create an empty object]

tinderUser.id = "123abc"
tinderUser.name = "denish"
tinderUser.isLoggedin = false

console.log(tinderUser);

const regularUser = {
    email: "damian@gmail.com",
    fullName: {
        userFullname: {
            firstName: "Damian",
            lastName: "Smith"
        }
    }
}

console.log(regularUser["fullName"]["userFullname"]["firstName"])

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}


// const obj3 = {...obj1,...obj2}
const obj3 = Object.assign({},obj1,obj2); 
console.log(obj3)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedin'));


const course = {
    coursename : 'Physics',
    duration : '6 months',
    skills : ['maths','physics'],
    isEnrolled : true
}

const {coursename,duration: timeperiod,skills,isEnrolled} = course //destructuring


console.log(timeperiod);