//const tinderUser = new Object() //singleton object

const tinderUser = {} //non-singleton object
tinderUser.id = "123abc"
tinderUser.name = "Subho"
tinderUser.isLoggedIn = false;

//console.log(tinderUser); //{ id: '123abc', name: 'Subho', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Saptodeep",
            lastName: "Atta"
        }
    }
}

console.log(regularUser.fullname?.userFullName);


//merging objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {...obj1, ...obj2} //using spread operator
console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj4 = Object.assign({}, obj1, obj2) //Copy the values of all of the enumerable own properties from one or
//  more source objects to a target object.
//  Returns the target object. {} is the target object here
console.log(obj4);  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


const users = [
    {
        id: 1,
        name: "Ram"
    },
    {
        id: 2,
        name: "Shyam"
    },
    {
        id: 3,
        name: "Jadu"
    },
    {
        id: 4,
        name: "Madhu"
    }
]

users[1].name

console.log(Object.keys(tinderUser)); //returns an array of keys
// [ 'id', 'name', 'isLoggedIn' ]

console.log(Object.values(tinderUser)); //returns an array of values
// [ '123abc', 'Subho', false ]

console.log(Object.entries(tinderUser)); //returns an array of arrays
//[ [ 'id', '123abc' ], [ 'name', 'Subho' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true
