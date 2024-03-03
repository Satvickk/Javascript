class user {
    constructor(name,password){
        this.name = name;
        this.password = password;
    }
    static changePassaword(){
        return "12345abc"
    }
}


const userOne = new user("Satvick", '123')

// console.log(userOne)
// console.log(userOne.changePassaword())         // this will give an error


class student extends user {
    constructor(name,password){
        super(name,password);
    }
}


const studentOne = new student("rahul", "32143")

// console.log(studentOne)
// console.log(studentOne.changePassaword())          //this will again give an error that we cannot access the function changePassword