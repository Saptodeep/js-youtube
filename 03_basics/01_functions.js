// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

// const result = addTwoNumbers(3, 4) //7
// console.log("Result : ", result); // Result :  undefined (because we are not returning anything from the function)


function addTwoNumbers(num1, num2){
    let result = num1 + num2
    return result
    console.log("Hitesh"); //Unreachable code. No line of code is executed after return
}

const result = addTwoNumbers(3, 4) 
//console.log("Result : ", result); // Result :  7


function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("Saptodeep")); //Saptodeep just logged in
//console.log(loginUserMessage()); //undefined just logged in

/*If you never want undefined, then either add an if condition inside function
 to check for undefined and print an appropriate message 
 or 
 set a default value of username in the function definition
 */
 function loginUserMessage(username = "Sam"){
    return `${username} just logged in`
}

console.log(loginUserMessage()); //Sam just logged in


// function calculateCartPrice(num1){
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500)); //200



//We can use rest operator to merge a list of arguments into a function

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500)); //[ 200, 400, 500 ]


//how to pass objects as arguments to functions
function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`)
}
 
handleObject({
    name: "Sam",
    price: 199
})


//how to pass arrays as arguments to functions
const newArray = [100, 200, 300, 400]

function returnSecondValue(arr){
    return arr[1]
}

console.log(returnSecondValue(newArray))

