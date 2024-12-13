// let score = "33abc";

// console.log(typeof score); //string
// console.log(typeof(score)); //string

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);// number
// console.log(valueInNumber); //NaN => not a number




// let score = null;

// console.log(typeof score); //object
// console.log(typeof(score)); //object

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);// number
// console.log(valueInNumber); //0




// let score = undefined;

// console.log(typeof score); //undefined
// console.log(typeof(score)); //undefined

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);// number
// console.log(valueInNumber); //NaN



// let score = false;

// console.log(typeof score); //boolean
// console.log(typeof(score)); //boolean

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);// number
// console.log(valueInNumber); //1 (0 in case of false)


/*
to Number conversion: 
    "33" => 33
    "33abc" => NaN
    true => 1; false => 0
    null => 0
    undefined => NaN
*/



// let isLoggedIn = 1;

// console.log(typeof isLoggedIn); //number

// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(typeof booleanIsLoggedIn);// boolean
// console.log(booleanIsLoggedIn); //true


/*
to Boolean conversion : 
1 => true
0 => false
"" => false
"abc" => true
*/


// let someNumber = 33;
// let stringNumber = String(someNumber);
// console.log(typeof stringNumber); // string
// console.log(stringNumber); // 33


//  ******************************* Operations *****************************8

let str1 = "hello"
let str2 = " saptodeep"
console.log(str1 + str2); // hello saptodeep

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32

/*
refer this link to study about prefix and postfix operators : 
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
 */



