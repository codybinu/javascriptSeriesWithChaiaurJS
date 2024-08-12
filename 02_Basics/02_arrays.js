const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman","Flash","Batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros) //output: [ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]

// let allHeros = marvel_heros.concat(dc_heros) 
// console.log(allHeros); //output: [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

//spread operator
let heroes = [...marvel_heros, ...dc_heros]
// console.log(heroes); //output: [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

const newArray = [1,2,3,[4,5],6,7,[8,9,[10,11,12]]]

const usable_newArray = newArray.flat(Infinity);

// console.log(usable_newArray); //output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]


console.log(Array.isArray("Binayak")); //output: false
console.log(Array.from("Binayak")); //output: [ 'B', 'i', 'n', 'a', 'y', 'a', 'k' ]
console.log(Array.from({name: "Binayak"})) //output: [] //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); //output: [ 100, 200, 300 ]