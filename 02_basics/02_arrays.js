const cars = ["Volvo", "BMW", "Ford", "Mazda"]
const cars1 = ["Porsche", "Audi", "Tesla", "Mercedes"]

// cars.push(cars1)

// console.log(cars);
// console.log(cars[3][1]);

// const allCars = cars.concat(cars1)
// console.log(allCars);

const allNewCars = [...cars,...cars1]
// console.log(allNewCars);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("RM-CS"));
console.log(Array.from("RM-CS"));
console.log(Array.from({name: "RM-CS"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))