/*
Datatypes are categorized based on Call By Value or Call By Reference
=>categorized based on  how the data is stored or how it is accessed from the memory


# Primitive (Call by Value : the value is copied and then you make changes to the copied value)
7 types : string, number, boolean, null, undefined, symbol, BigInt

# Reference (Non primitive)(Call By Reference)
Types : Arrays, Objects, Functions


JavaScript is a dynamically typed language. 
Because data type will automatically assigned at the time of compilation or code execution.
let age = 32 // we are not defining the datatype of age 
*/

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId); //false

const bigNumber = 42858448748345n; //added n at the end to make it of bigInt datatype



//Array
const fruits = ["apple","mango","pomegranate"];

//Object
let myObj = {
    name : "Saptodeep",
    age : 26

}

//Function
const myFunc = function(){
    console.log("Hello World");
    
}

console.log(typeof fruits); //object
console.log(typeof myObj); //object
console.log(typeof myFunc); //object function
//Return type of all reference data types is object


/*
Stack and Heap memory: 

Stack(Primitive), Heap(Non-primitive)
When we use Stack memory, we get a copy of the variable we declared
When we use Heap memory , we get the reference of the original value. 
So whatever we change, the original value will be changed
*/

let phoneName = "Apple"
let computerName = phoneName;
computerName = "Lenovo"
console.log(phoneName); // Apple
console.log(computerName); //Lenovo
//Call by Value happening above

let userOne = {
    name : "Saptodeep",
    email : "sapto@gmail.com"
}
let userTwo = userOne;
userTwo.email = "deep@gmail.com"
console.log(userOne.email); //deep@gmail.com
console.log(userTwo.email); //deep@gmail.com
//Call by Reference happening above


