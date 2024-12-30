// Step 1 :
// when we use new ,it creates an empty object(creates a new context) which is called an instance
// Step 2: 
// we use new keyword to call a constructor function which is used to pass in the arguments
// Step 3: 
// all these arguments are injected inside the this

const user = {
    username: "Saptodeep",
    loginCount: 12,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database")
        //console.log(`Username : ${this.username}`)
        console.log(this)
    }
}

// console.log(user.username) //Saptodeep
// user.getUserDetails() 
/*
Output: 
{
    username: 'Saptodeep',
    loggedInCount: 12,
    signedIn: true,
    getUserDetails: [Function: getUserDetails]
  }
*/

//console.log(this) //{}


function User(username, loginCount, signedIn){
    this.username = username
    this.loginCount = loginCount
    this.signedIn = signedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this //this is implicitly added to the function
}

// const userOne = User("Hitesh", 12, true)
// const userTwo = User("Chai", 13, false)
//console.log(userOne) //userTwo data overrides userOne data because both are using the same context
//that's why we need to create new instances

const userOne = new User("Hitesh", 12, true)
const userTwo = new User("Chai", 13, false)
console.log(userOne) //User { username: 'Hitesh', loginCount: 12, signedIn: true }
console.log(userTwo) //User { username: 'Chai', loginCount: 13, signedIn: false }