/*
We can create objects using constructor or object literals
When we create object using constructor, we get singleton
Object.create
*/

//using object literals

const mySym = Symbol("key1");

const JsUser = {
    name : "Saptodeep",
    "full name": "Saptodeep Atta",
    [mySym]: "mykey1",
    age: 26,
    email: "sapto@gmail.com",
    location: "Kolkata",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//How to access

console.log(JsUser.email);
//or
console.log(JsUser["email"]);

console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
console.log(JsUser);

//how to add properties
JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`); //this is used to access the porperties of current object reference 
}

JsUser.greeting(); //Hello JS User
JsUser.greetingTwo(); //Hello JS User, Saptodeep

