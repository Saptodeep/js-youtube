// The Promise object represents the eventual completion (or failure) of an asynchronous operation 
// and its resulting value.

//creating promises
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network requests
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    }, 1000)

})

//consuming promises
//.then has direct relation with resolve
//Approach 1 
promiseOne.then(function(){
    console.log("Promise consumed")
})


//Approach 2 
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2 complete")
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async task 2 resolved")
})


//Approach 3 : say you made a network request and you want the promise to consume the data which we get 
//             by making the network call
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "Saptodeep", email: "sapto@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user)
})


//Approach 4 : say we made a netwrok request or wanted to access a file , but the file was not accessible , 
// so we will get some error which we need to handle 
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Hitesh", password: "123"})
        } else {
            reject("Error : Something went wrong!")
        }
    }, 1000)
})

//we use chaining to avoid the callback hell
//the value that is returned from the above then is now available in the next then
promiseFour
.then((user) => {
    console.log(user)
    return user.username
})
.then((username) => {
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(() => console.log("The promise is either resolved or rejected"))


//Approach 5: Promises can be handled using either .then().catch() or by async await 
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "javascript", password: "123"})
        } else {
            reject("Error : JS went wrong!")
        }
    }, 1000)
})

//async await is same as then and catch (they wait for the task to get completed. 
// If it gets completed successfully, then it proceeds otherwise throws an error there itself). 
//The only difference is that async await doesn't gracefully handle the errors
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()


//Approach 6 : use fetch with async await
//fetch returns a promise
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// getAllUsers()


//fetch with then and catch
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => console.log(data))
.catch((error) => console.log(error))