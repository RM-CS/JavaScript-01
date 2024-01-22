// let myName = "rmcs     "
// let mychannel = "rmcscoding     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.rmcs = function(){
    console.log(`rmcs is present in all objects`);
}

Array.prototype.heyrmcs = function(){
    console.log(`rmcs says hello`);
}

// heroPower.rmcs()
// myHeros.rmcs()
// myHeros.heyrmcs()
// heroPower.heyrmcs()

// inheritance

const User = {
    name: "rmcs",
    email: "rmcs@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "rmcscoding     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"rmcs".trueLength()
"iceTea".trueLength()