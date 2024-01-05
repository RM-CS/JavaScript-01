// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "RM",
    "full name": "RM-CS",
    [mySym]: "mykey1",
    age: 20,
    location: "Pune",
    email: "rmcs@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "rmcs@yahoo.com"
// Object.freeze(JsUser)
JsUser.email = "rmcs@micro.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello! JsUser");
}
JsUser.greetingTwo = function(){
    console.log(`Hello! JsUser, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());