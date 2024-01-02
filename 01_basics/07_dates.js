let myDate = new Date()
// console.log(myDate.toString());
//Tue Jan 02 2024 14:11:36 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString());
// Tue Jan 02 2024

// console.log(myDate.toLocaleString());
// 1/2/2024, 2:42:36 PM

// console.log(typeof(myDate));
// object

// let myNewDate1 = new Date(2024, 0, 23)
// console.log(myNewDate1.toDateString());
// Tue Jan 23 2024

// let myNewDate2 = new Date(2024, 0, 23, 5, 3)
// console.log(myNewDate2.toLocaleString());
// 1/23/2024, 5:03:00 AM

// let myNewDate3 = new Date("2024-01-14")
// console.log(myNewDate3.toLocaleString());
// 1/14/2024, 12:00:00 AM

let myNewDate4 = new Date("01-20-2023")
// console.log(myNewDate4.toLocaleString());
// 1/20/2023, 12:00:00 AM

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myNewDate4.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time is ...`

newDate.toLocaleString('default', {
    weekday: "long"
})

