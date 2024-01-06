// const uberUser = new Object()
const uberUser = {}

uberUser.id = "1234abc"
uberUser.name = "Rishi"
uberUser.isLoggedIn = false

// console.log(uberUser);

const regularUser = {
    email:"ri@gmail.com",
    fullname : {
        userfullname: {
            firstname: "Anjali",
            lastname: "Khanna"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "d@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    }
]

users[1].email

console.log(uberUser);

console.log(Object.keys(uberUser));
console.log(Object.values(uberUser));
console.log(Object.entries(uberUser));

console.log(uberUser.hasOwnProperty('isLogged'));