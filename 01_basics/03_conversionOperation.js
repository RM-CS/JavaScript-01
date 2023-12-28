// let score = "44"
// let score = "44fgh"  //NaN
// let score = null //0
// let score = undefined;  //NaN
// let score = true;  //1
let score = "Abc";  //NaN


// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber); 


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn); 

// 1=> true    0=> false
// ""=> false
// "abc"=> true


let someNum = 43
let stringNumber = String(someNum)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// --------Operations--------

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello"
let str2 = " RMCS"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(+true);
// console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);

// Links:- 
// https://tc39.es/ecma262/#sec-type-conversion
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment