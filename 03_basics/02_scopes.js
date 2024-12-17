// var c = 300;

// if(true){
//     let a = 10
//     const b = 20
//     var c = 30
// }

//console.log(a) // ReferenceError: a is not defined (because let is block-scoped. let variable declared inside cant be accessed outside)
//console.log(b) // ReferenceError: b is not defined (because const is block-scoped. const variable declared inside cant be accessed outside)
// console.log(c) //30 (var is not block scoped)


var c = 300;
let a = 100 //global scope
if(true){
    let a = 10 //block scope
    const b = 20
    var c = 30
    console.log("Inner a : ", a ); //10 
    
}

console.log(a) // 100


//Nested scopes

function one(){
    const username = "Saptodeep"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website); //ReferenceError: website is not defined
    two()
}

one()

//example
if(true){
    const username = "Hitesh"
    if( username === "Hitesh"){
        const website = " youtube"
        console.log(username + website) //Hitesh youtube
    }
    //console.log(website) //error
}
//console.log(username) //error


//#++++++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++++++++++++++


// function addOne(num){           //normal function declaration
//     return num + 1
// }

// console.log(addOne(5))   //6

// const addTwo = function(num){       //function expression
//     return num + 2
// }

// console.log(addTwo(7))   //9



//Now if we call the functions before declaration
console.log(addOne(5)) //6

function addOne(num){           //normal function declaration
    return num + 1
}

console.log(addTwo(7)) //Cannot access 'addTwo' before initialization

const addTwo = function(num){       //function expression
    return num + 2
}


