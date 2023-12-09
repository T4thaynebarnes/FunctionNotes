// declare and define mean the same thing

// **************PARAMETER VS ARGUMENT****************

// function below is set to log printing....

// function printMe() {
//   console.log("printing...");
// }
// you have to call the function, it will not work without calling it
// CALLING FUNCTION BELOW

// **** decommited code below
// printMe();

// introducing parameter
// PARAMETER is in the parentheses of the function "
// function printMe("PARAMETER HERE") {
//   console.log("printing...");
// }

// passing an argument below, you pass it in when you call it.
// printThis(***ARGUMENT HERE***);

function printThis(param) {
  console.log(param);
}

// calling printThis function
printThis("All hail viking Santa, example one son!");

// by placing hail viking santa in (the parentheses)
// param = that string "All hail viking Santa" hey gotta have fun.
// *********************************************************************

// Declaration of function
const printMe = function () {
  console.log("Example 2 Kungfu");
};
// calling function above
printMe();

// I passed in argument to the call and it prints 5, 6 to the console.
// you must have a parameter and an argument to pass in the call.
const printMeAgain = function (a, b) {
  console.log(a, b);
};

// calling function from above
printMeAgain(5, 6);
// *****************ASSIGN FUNCTION OUTPUT VALUE TO VARIABLE***********
function x() {}
// below shows by assigning variable to function x it means
// p = whatever values are out put from function x not the
// function itself

let p = x();

function y() {}
