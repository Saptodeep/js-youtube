"use strict"; //treat all JS code as newer version of JS. 
// No need to even write this line as automatically , everything runs in strict mode

//alert(3+3); //this will throw a ReferenceError: alert is not defined bcoz now we are using Node ;
//  alert can be run in the browser console bcoz JS engine can execute it

//documentation for JS standards : tc39.es and mdn


let name = "Saptodeep"
let age = 26
let isLoggedIn = true
let state;

/*
Data Types :

number => range is 2 to the power 53
bigint
string => ""
boolean => true/false
null =>  standalone value
undefined
symbol => unique
*/

console.log(typeof "Sapto"); //string
console.log(typeof 8); //number
console.log(typeof false); //boolean
console.log(typeof undefined); //undefined
console.log(typeof null); //object