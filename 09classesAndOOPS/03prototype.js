const username = "satvick"
const myArray = [1,2,3,4,5,6]
const myObject = { car : "maruti"}

// in Object we saw that we can define a function/method for a specific function in prototype and can use it fo every instace of that function

// similarily we can define a function/method for any data structure in prototype and it will be present for that data type

// example

Object.prototype.print = function (val) {
    console.log("this is print function");
}

// username.print()
// myArray.print()
// myObject.print()

// thus we can create a method for an object which will be available for all data structure (array, string, object etc) because it is a parent object similarily if we create a prototypal function for array we can only access that function for arrays only (because remember everything in js is object)



let myName = "satvick     "
let mychannel = "bhai     "

// console.log(myName.trueLength);

String.prototype.trueLength = function() {
    console.log(`True length is ${this.trim().length}`)
}

// myName.trueLength();

// "thisIsACamelCaseString".trueLength();



// inheritance

const User = {
    name: "satvick",
    email: "satvick@google.com"
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

// modern syntax of Inheritance

Object.setPrototypeOf(TeachingSupport, Teacher)
Object.setPrototypeOf(TASupport, Teacher)