// Inheritance

class user {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;;
    }

    islogged = false;

    logIn(){
        this.islogged = true
        return `User : ${this.username} is logged in`
    }

    showPassword(){
        return `password : ${this.password}`
    }
}

class student extends user {
    constructor(username, email, password){
        super(username);                            // super keyword helps us in the same way as call does with same functionality
        this.email = email;
        this.password = password
    }

    isLoggedIn(){
        return this.islogged ? `${this.username} is logged in` : `Please log in`
    }
}

const studentOne = new student("satvick", "satvick@gmail.com", "123abc")
console.log(studentOne)
console.log(studentOne.logIn())
console.log(studentOne.isLoggedIn())

