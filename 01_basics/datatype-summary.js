// # Primitive (Call by value)
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Number
const score = 100
const scoreValue = 100.3

// Boolean
const isLoggedIn = false

// null (empty)
const temperature = null

// undefined
let userEmail;

// Symbol
const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// BigInt
const bigNumber = 5675658587697696n


// # Reference (Non-primitive)
// Array, Objects, Functions

// Array
const weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

// Object
let obj = {
    name: "RMCS",
    age: 20,
}

// Function
// Definition
let myFunction = function() {
    console.log("Hello! This is function");
}
// Calling
// myFunction()

// typeof
// console.log(typeof score);  //number
// console.log(typeof isLoggedIn); //boolean
// console.log(typeof null);   //object =>null
// console.log(typeof userEmail);  //undefined
// console.log(typeof anotherId);  //symbol
// console.log(typeof weekday);  //object =>array
// console.log(typeof obj);    //object =>object
// console.log(typeof myFunction); //function =>known as object function

// Link - https://tc39.es/ecma262/#sec-typeof-operator

// ------------------------------

// Stack (Primitive), Heap (Non-Primitive)

let myGitName = "RMCS"

let anotherName = myGitName
anotherName = "AnotherGitName"

console.log(myGitName);
console.log(anotherName);


let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "rmcs@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

// stack memory                     // heap memory

// ------------------               --------------------------------
// |                |               |                              |
// ------------------               |                              |
// |    userTwo     |-----          |                              |
// ------------------     \------>  | {                            |
// |    userOne     | ------------> |   email : "user@gmail.com",  |
// ------------------               |   upi : "user@ybl"           |
// |   myGitName    |               | }                            | 
// ------------------               |                              |
// |  anotherName   |               |                              |   
// ------------------               --------------------------------
// |   myGitName    |          
// ------------------       