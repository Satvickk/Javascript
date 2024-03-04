class user {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get password(){
        return `password : ${this._password.toUpperCase()}`
    }

    // a getter function will always return

    set password(val){
        this._password = val
    }

    // a setter will always have a value as an argument
}

const userOne = new user("sat@gmail.com", '1234')

console.log(userOne)

