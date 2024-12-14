//array

const myArr = [0,1,2,3,4,5]
const heroes = ["shaktiman","naagraj"]
const myArr2 = new Array(0,1,2,3,4)
console.log(myArr[1]);

//Array methods

myArr.push(6) // adds this value after the last element of the array
myArr.pop() //removes the last element of the array

myArr.unshift(9) //adds this element at the start of the array; so the remaining elements get shifted to right
myArr.shift() //removes the first element of the array
console.log(myArr); // [0,1,2,3,4,5]

console.log(myArr.includes(9)); //false
console.log(myArr.indexOf(9)); //-1

const newArr = myArr.join(); //adds all the elements of an array into a string, separated by the specified separator
console.log(newArr); //0,1,2,3,4,5
console.log(typeof newArr); //string

//slice and splice
//slice method doesn't manipulate the original array. However, splice manipulates the original array

console.log("A : ", myArr); //[0,1,2,3,4,5]

const myn1 = myArr.slice(1,3) //returns a copy of the section of an array ; 1 and 3 are index positions; range will be index 1 to 2
console.log(myn1); //[1,2]
console.log("B : ", myArr); // [0,1,2,3,4,5]

const myn2 = myArr.splice(1,3) //index 1 to 3 will be considered 
console.log(myn2); //[1,2,3]
console.log("C : ", myArr); // [0,4,5]






