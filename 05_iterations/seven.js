//map
//it also takes a callback function. 
// It iterates through each element of the array and then performs some operation on each element
//it also returns the value

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumbers.map( (num) => num + 10 )
//console.log(newNums)
// [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20  ]


//Chaining
const nums = myNumbers
                .map( (num) => num * 10)
                .map( (num) => num + 1 )
                .filter( (num) => num >= 40)

console.log(nums)
//[ 41, 51,  61, 71, 81, 91, 101 ]