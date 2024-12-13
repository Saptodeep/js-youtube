// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 >= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1); //true : converts "2" to a number
// console.log("02" > 1); // true

// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true

/*
Note : The reason is that an equality check == and comparisons <,>,>=,<= work differently.
Comparisons convert null to a number, treating it as 0.
That's why null>=0 is true and null>0 is false
*/

// console.log(undefined > 0); //false
// console.log(undefined == 0); //false
// console.log(undefined >= 0); //false

console.log("2" == 2); // true as it checks only values
console.log("2" === 2); // false as i checks value as well as datatype(=== is used for strict check)
