class User {

    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    encriptName(){
        return `encripted username :  xyz${this.name}abc`
    }

    changeUsername(){
        return `changed username :  ${this.name.toUpperCase()}`
    }
}

const userOne = new User("satvick", 21, "male")

// console.log(userOne);
// console.log(userOne.encriptName());
// console.log(userOne.changeUsername());


// Behind the scenes : behind the scene the classes works with the help of prototype object as we had discussed earlier

function userDetails(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}

userDetails.prototype.encriptName = function (){
    return `encripted username :  xyz${this.name}abc`
}

userDetails.prototype.changeUsername = function (){
    return `changed username :  ${this.name.toUpperCase()}`
}

const newUser = new userDetails("Rahul", 21, "male");


// console.log(newUser);
console.log(userOne.encriptName());
console.log(userOne.changeUsername());