class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}rmcs`
    }

    set password(value){
        this._password = value
    }
}

const rmcs = new User("r@rmcs.ai", "abc")
console.log(rmcs.email);