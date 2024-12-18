//for in 

const myObject  = {
    js: 'Javascript',
    cpp: 'C++',
    py: 'python',
    rb: 'ruby'
}

for (const key in myObject) {
    //console.log(key) //to print keys
}
/*
js
cpp
py
rb
*/

for (const key in myObject) {
    //console.log(myObject[key]) //to print values
}
/*
Javascript
C++
python
ruby
*/

for (const key in myObject) {
    //console.log(`${key} is the short-form for ${myObject[key]}`)
}
/*
js is the short-form for Javascript
cpp is the short-form for C++
py is the short-form for python
rb is the short-form for ruby
*/


//for in with arrays

const programming = ["js", "py", "rb", "cpp"]

for (const key in programming) {
    console.log(key) //prints index keys of arrays
}
/*
0
1
2
3
*/ 

for (const key in programming) {
    console.log(programming[key]) //prints values of arrays
}
/* 
js
py
rb
cpp
*/

//Note: we can't iterate through map using for in loop