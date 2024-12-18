//reduce
/*
reduce method takes in two parameters: a callback function and an initial value
Use case: say in a shopping cart, you want to find the sum of all the item prices and calculate the total bill
first time, accumulator takes the value of the initial value, and then it takes the value of the combined result
currentValue is each item in the array
*/

// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function(accumulator, currentValue){
//     return accumulator + currentValue
// }, 0)

//console.log(myTotal) //6

//OR using arrow function
const myNums = [1, 2, 3]

const myTotal = myNums.reduce( (acc, currVal) => acc  + currVal, 0)

console.log(myTotal) //6


//Exercise
const shoppingCart = [
    {
        itemName: 'js course',
        price: 1000
    },
    {
        itemName: 'python course',
        price: 2000
    },
    {
        itemName: 'data science course',
        price: 3000
    },
    {
        itemName: 'java course',
        price: 4000
    }
]

//all all the prices in the shopping cart
const totalBill = shoppingCart.reduce( (acc, item) =>  acc + item.price, 0)

console.log(totalBill) //10000
