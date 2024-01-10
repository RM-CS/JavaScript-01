const user = {
    username: "RM-CS",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "maya"
// user.welcomeMessage()

// console.log(this);

// function swiggy(){
//     let username = "RM-CS"
//     console.log(this.username);
// }

// swiggy()

// const swiggy = function () {
//     let username = "RM-CS"
//     console.log(this.username);
// }

const swiggy =  () => {
    let username = "RM-CS"
    console.log(this);
}
// swiggy()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "RM-CS"})

console.log(addTwo(3, 4))

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()