class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const rmcs = new Teacher("rmcs", "rmcs@teacher.com", "123")

rmcs.logMe()
const rmcsCoding = new User("rmcsCoding")

rmcsCoding.logMe()

console.log(rmcs instanceof User);