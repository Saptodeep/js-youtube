/*
Immediately invoked Function expression (IIFE)
()()
first () conatains the function definition, and second () is for function execution
It is used to immediately invoke a function. Also to avoid the pollution of global scope
*/ 

// function chai(){
//     console.log('DB connected')
// }
// chai()

(function chai(){
    //Nnamed IIFE
    console.log('DB connected')
})();


( () => {
    console.log('DB CONNECTED TWO');
} )();


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')


/*
Output:
DB connected
DB CONNECTED TWO
DB CONNECTED TWO hitesh
*/