//forEach
//forEach method takes a callback function as a parameter
//callback function cant be declared with a name inside forEach

const coding = ["js", "cpp", "ruby", "python", "java"]

coding.forEach( function (item){
    //console.log(item)
} )

//or use arrow function syntax

coding.forEach( (item) => {
    //console.log(item)
})

//or 

function printMe(item){
    //console.log(item)
}

coding.forEach(printMe)

/*
js
cpp
ruby
python
java
*/


coding.forEach( (item, index, arr) => {
    console.log(item, index, arr)
} )
/*
js 0 [ 'js', 'cpp', 'ruby', 'python', 'java' ]
cpp 1 [ 'js', 'cpp', 'ruby', 'python', 'java' ]
ruby 2 [ 'js', 'cpp', 'ruby', 'python', 'java' ]
python 3 [ 'js', 'cpp', 'ruby', 'python', 'java' ]
java 4 [ 'js', 'cpp', 'ruby', 'python', 'java' ]
*/


//forEach is very much used with array of objects

const myCoding = [
    {
        languageName: 'javascript',
        languageFileName: 'js'
    },
    {
        languageName: 'python',
        languageFileName: 'py'
    },
    {
        languageName: 'c++',
        languageFileName: 'cpp'
    },
    {
        languageName: 'ruby',
        languageFileName: 'rb'
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName)
});
/*
javascript
python
c++
ruby
*/
