
const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "batman", "flash"]

//marvel_heroes.push(dc_heroes); //pushes the array to the existing array
//console.log(marvel_heroes); //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]

const all_heroes = marvel_heroes.concat(dc_heroes); 
//concat combines two or more arrays. This method returns a new array without modifying any existing arrays
console.log(all_heroes); //[ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]

//using spread operator
const all_new_heroes = [...marvel_heroes, ...dc_heroes];
console.log(all_new_heroes); //[ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]

//flat method
//returns a new array with all sub-array elements concatenated
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [ 4, 5] ] ]
const new_another_array = another_array.flat(3); // 3 is the depth here 
console.log(new_another_array); //[ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]


console.log(Array.isArray("Saptodeep")); //false
console.log(Array.from("Saptodeep")); // ['S','a','p','t','o','d','e','e','p']
console.log(Array.from({ name : "Hitesh"})); //[] as u have to specify whether it should form array based or keys or values

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of( score1, score2, score3)); //[ 100, 200, 300 ]
//Array.of() returns a new array from a set of elements
