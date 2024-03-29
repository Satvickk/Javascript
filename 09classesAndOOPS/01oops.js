// Object Literal : it literally mean an object - {}

// remember for now this keyword refers to current context
const user = {
    username : "Satvick",
    age: 21,
    gender: 'male',

    greet: function () {
        // console.log(`hello ${this.username} your are ${this.age} years old and you are a ${this.gender} by gender`);
        console.log(this);
    }
}

// console.log(user.greet());
// console.log(user.username);
// console.log(this);                                // gives empty object {} -(this is the global scope on node environment whose value is stored in this of the global context)


// console.log(user.greet());                      // output
//                                              {
//                                                 username: 'Satvick',
//                                                  age: 21,
//                                                  gender: 'male',
//                                                  greet: [Function: greet]
//                                              }

// this is the inner scope of object user object whose value is store in this of the user's current context




function employee(username, password, salary) {
    this.username = username;
    this.password = password;
    this.salary = salary;

    this.calculate = function(){
        console.log(this.salary * 10);
    }

    // return this       // we can return implicitely if we use constructor function we do not require returning any values
}

// const empOne = employee("satvick", "123", 2000)
// const empTwo = employee("hitesh", "321", 4000)

// console.log(empOne);
// console.log(empTwo);

//as we call he function for the empTwo the values of the empOne is changed because the context is same. thus to create a seperate function copy (instance) values from the function without changining previous values we use new keyword which will invoke contructor function which further will return a copy ofthe original function object



const empOne = new employee("satvick", "123", 2000)
const empTwo = new employee("hitesh", "321", 4000)

// console.log(empOne);
// console.log(empTwo);

console.log(empOne.constructor)               // can also be written as empOne.prototype.constructor                  

//IMP - a constructor function of an object always holds the reference to the original object ! , in this case it holds the reference of a function employee i.e [Function: employee]



// on using constructor method(when we invoked constructor function using new keyword)
// step 1 : an empty object/instance is created - {}
// step 2 : the constructor function is called/loaded and all the attributes and methods are created/copied from the original object/class
// Step 3 : all the properties and methods will be inserted into the empty instance
// Step 4 : the instance is then saved in the memory


// instanceOf is used to check weather the object is instance of the object or not