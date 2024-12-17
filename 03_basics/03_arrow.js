//this keyword refers to the current context

const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function(){
        // console.log(`${this.username}, welcome to website`)
        // console.log(this)
    }
}

// user.welcomeMessage() 
// user.username = "sam"
// user.welcomeMessage() 

/*
Output : 
hitesh, welcome to website
{
  username: 'hitesh',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
sam, welcome to website
{
  username: 'sam',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/

//console.log(this) //{}
/*
Note: 
In Node environment:
there is no context in global, so 'this' gives us an {}

In browser:
'this' gives us a window object
*/


// function chai(){
//     console.log(this) //when we print 'this' inside a function , then it doesnt give {}, but an object having many values
// }
// chai()


// function chai(){
//     const username = "hitesh"
//     console.log(this.username) //undefined (which means we can use 'this' to access only object context)
// }
// chai()


// const chai = function(){
//     const username = "hitesh"
//     console.log(this.username)  //undefined
// }
// chai()


// const chai = () => {
//     const username = "hitesh"
//     console.log(this.username) //undefined
//     console.log(this) // {}
// }
// chai()



//arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4)) //7

//arrow function with implicit return
//const add = (num1, num2) =>  num1 + num2
// const add = (num1, num2) => (num1+num2)
// console.log(add(3,4)) //7

//if you need to return an object, then you must wrap it in parenthesis if you are using arrow function with implicit return
// const addTwo = (num1, num2) => {username: "hitesh"} 
// console.log(addTwo(3, 4)) //undefined

const addTwo = (num1, num2) => ({username: "hitesh"})
console.log(addTwo(3, 4)) //{ username: 'hitesh' }



