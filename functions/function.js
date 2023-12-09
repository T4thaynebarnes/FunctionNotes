// calls notes*****
// ************TYPES OF FUNCTIONS***********************
// ANONYMOUS FUNCTION= does NOT have a function name 
// -- only function expressions

//**NAMED FUNCTION** is a function with a function name --
// function expressions or declarations

// ** Recursive Function ***a function that calls itself

// IIFE*** stands for Immediatley Invoked Function Expression
// a function expression that is called directly after the
//  function is loaded into the browsers complier

// Function can be stored as a value, passed as an argument,
//  or returned fron another function
// ** functions that return other functions are called 
// higher order functions


// *** callback****
//  function that is passed into another function

// *** higher order function***
//  a function that accepts a function as an argument

// *** arrow function ***
//  a concise way to write functions in JS

//  ******EXAMPLE PROMISE OBJECT******

// const booleanFlag = true;

// let trueOrFalse = new Promise((resolve, reject) => {
//     if (booleanFlag) {
//         resolve("flag is true");
//     } else {
//         reject("the flag is false");
//     }
// });
// // this will print out the promise that you've just declared
// console.log(trueOrFalse);

// trueOrFalse
//  .then(function successValue(result){
//     console.log(result);
//  })
//  .then(function successValue2(){
//     console.log("you can call multiple functions this way");
//  })
// //  you could call a function there say it is false or true
//  .catch(function failureValue(reject){
//     console.log(reject);
//  });
// //  Notice that Promise chaining exists in JavaScript, 
// // which avoids one of the Issues with Callbacks 
// // surrounding nested Callbacks.  Error Handling of 
// // nested Callbacks is complex and confusing.  
// // While Callbacks can be nested, Promises are chained, 
// // which avoids the nesting issue.


//  example of arrow function
let myArrowFunction = (a, b) => {
    let sum = a + b;
    let difference = a - b;
    return sum * difference;
}
console.log(myArrowFunction(5, 3));


function createFullName (firstName, LastName) => firstName + " " + LastName;
console.log(createFullName("ollie", "smith"));