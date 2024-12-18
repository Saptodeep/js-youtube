//for of   --this is an array specific loop

//["", "", ""]
//[{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num)
}


const greetings = "Hello World!"

for (const greet of greetings) {
    console.log('Each character is : ',greet)
}

/*
Maps:
Map object holds key-value pairs
remembers the original insertion order of the keys
unique values
*/

const map = new Map()
map.set('IN','India')
map.set('US','United States of America')
map.set('FR','France')
map.set('IN','India')

console.log(map)
/*
Map(3) {
  'IN' => 'India',
  'US' => 'United States of America',
  'FR' => 'France'
}
*/

for (const key of map) {
    console.log(key)
}
// [ 'IN', 'India' ]
// [ 'US', 'United States of America' ]
// [ 'FR', 'France' ]

for (const [key, value] of map) {
    console.log(key, ': -', value)
}
// IN : - India
// US : - United States of America
// FR : - France


const myObject = {
    game1: 'NFS',
    game2: 'Assassins Creed',
    game3: 'Spiderman'
}

for (const key of myObject) {
    console.log(key) //TypeError: myObject is not iterable
}

//Note : we can't iterate through objects using for of loop