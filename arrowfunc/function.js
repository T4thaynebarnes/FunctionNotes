// ********template literals****notes
// eliminates concatination of strings
// allows for interpolation
// INTERPOLATE- means to execute code 
// inside a string or in a different language


let myString = `Hello world! My girlfriend is 
cooking pizza for me she is amazing!!!!!`;
console.log(myString);
// interpolation below ${ other language or code block}
console.log(`Six times Five = ${5 * 6}`);

// arrow functions *******
// Here is an arrow function that implements the power function above
// const powerFunction = (base, exp) => { return base**exp };

// console.log(powerFunction(2,2));
// console.log(powerFunction(4,2));
// console.log(powerFunction(2,4));

// const createFullName = (firstName, lastName) => firstName+ " " +lastName;

// const doubleNumber = number => number *2;
// console.log(doubleNumber(10));


// function getEvenNumbers(array) {

//     let evenNumbers = [];
    
//     for (let i of array) {
//     if (i % 2 === 0) {
//     evenNumbers.push(i);
//     }
//     }
//     return evenNumbers;
//     }
    
//     console.log(getEvenNumbers([2, 3, 4, 5, 6, 7, 8, 9, 10])); // expected output: [2, 4, 6, 8, 10]


// let getEvenNumbers = array => {
//     let evenNumbers = [];
//     for ( let i of array){
//         if ( i % 2 === 0){
//             evenNumbers.push(i);
//         }
//     }
//        return evenNumbers;
// };

// console.log(getEvenNumbers([2,3,4,5,6,7,8,9,10]))




const customers = [
    {
    // Object 1: Name does not start with C, no match for city/state, not gold/platinum, not silver and under 29
    name: "Sam",
    address: {
    street: "1234 W Bell Rd",
    city: "Phoenix",
    zip: "85308",
    state: "AZ",
    },
    membershipLevel: "BRONZE",
    age: 32,
    },
    {
    // Object 2: Address field (street) is undefined, will not be added to the results array
    name: "Bob",
    address: {
    city: "Long Beach",
    zip: "9000",
    state: "CA",
    },
    membershipLevel: "GOLD",
    age: 32,
    },
    {
    // Object 4: Meets enough requirements, will be added to the results array
    name: "Christina",
    address: {
    street: "1234 Alamitos Ave",
    city: "Long Beach",
    zip: "90002",
    state: "CA",
    },
    membershipLevel: "SILVER",
    age: 21
    },
    ];

    const matchingCustomers = (custArray) => {
        let resultArray=[];

        for(let customer of custArray){
            if(customer.address.street === defined||
            customer.address.city === defined ||
            customer.address.zip === defined ||
            customer.address.state === defined 
            )
            console.log("There are undefined address properties!", customer);
        } 

    }