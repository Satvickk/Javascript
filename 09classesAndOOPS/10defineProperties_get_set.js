
// the old way before ES6

function student(email, password) {
    this._password = password;
    this._email = email;

    Object.defineProperty(this, "email", {
        set: function(value){ this._email = value; },
        get: function(){ return `email : ${this._email.toUpperCase()}`;}
    });
}

const studentOne = new student("satvick@gmail.com", "123abc");
console.log(studentOne);
console.log(studentOne.email); // Accessing the getter
studentOne.email = "example@gmail.com"; // Setting the email using the setter
console.log(studentOne);

