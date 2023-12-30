const name = "RMCS"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and repo count is ${repoCount}`);

const gameName = new String('RMCS-Game')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
console.log(gameName.indexOf('M'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString =gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   rmcs   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rmcs.com/rmcs%20gamecheck"

console.log(url.replace('%20','-'));

console.log(url.includes('codinghub'));

console.log(gameName.split('-'));