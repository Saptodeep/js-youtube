const coding = ["js", "cpp", "ruby", "python", "java"]

const values = coding.forEach( (item) => {
    //console.log(item)
} )

//console.log(values)
/*
js
cpp
ruby
python
java
undefined // this is because forEach method does not return anything, hence 'values' variable get undefined 
*/

//filter
/*
filter method is similar to forEach method
it also accepts a callback function as a parameter
unlike forEach, filter returns a value
it iterates through each item , and then in the function body we need to give the condition
it returns those elements when the condition is true
*/

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const filteredNums = myNums.filter( (num) => num > 4 )
//console.log(filteredNums)  //[ 5, 6, 7, 8, 9, 10 ]

//if you still want to use forEach for the above task
const newNums = []

myNums.forEach( (num) => {
    if(num > 4)
        newNums.push(num)
} )

//console.log(newNums) //[ 5, 6, 7, 8, 9, 10 ]


//Exercise
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2004},
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989},
]

const userBooks = books.filter( (book) => book.genre === 'History' )

//console.log(userBooks)

const books1995 = books.filter( (book) => book.publish >= 1995)
//console.log(books1995)

const books1995andHistory = books.filter( (book) => book.publish >= 1995 && book.genre === 'History')
console.log(books1995andHistory)