let myDate = new Date();
// console.log(myDate.toDateString()) //output: Fri Jan 05 2024
// console.log(myDate.toISOString()) //output: 2024-01-05T01:21:05.069Z
// console.log(myDate.toJSON()) //output: 2024-01-05T01:21:05.069Z
// console.log(myDate.toLocaleDateString()) //output: 1/5/2024
// console.log(myDate.toLocaleString()) //output: 1/5/2024, 6:51:05 AM
// console.log(myDate.toLocaleTimeString()) //output: 6:51:05 AM
// console.log(myDate.toString()) //output: Fri Jan 05 2024 06:51:05 GMT+0530 (India Standard Time)
// console.log(myDate.toTimeString()) //output: 06:51:05 GMT+0530 (India Standard Time)
// console.log(myDate.toUTCString()) //output: Fri, 05 Jan 2024 01:21:05 GMT

let myCreatedDate = new Date(2024, 0 , 1); // (year, month{in Js month starts from 0}, date)
console.log(myCreatedDate.toDateString()); //output: Mon Jan 01 2024

let myCreatedDateWithTime = new Date(2024, 0 , 12, 15, 4);
console.log(myCreatedDateWithTime.toLocaleString()); //output: 1/12/2024, 3:04:00 PM


let myCreatedDateWithFormat = new Date("2024-01-23"); 
console.log(myCreatedDateWithFormat.toLocaleString()); //output: 1/23/2024, 5:30:00 AM


let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())

let newDate = new Date()

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}))