const username = "satvick"
const myArray = [1,2,3,4,5,6]
const myObject = { car : "maruti"}

// in Object we saw that we can define a function/method for a specific function/object in prototype and can use it for every instace of that function

// since we know that every data structure is an Object we can define a function/method for any data structure in prototype and it will be present for that data type

// example - if we define a prototype function for Object we will have that function for every other data structure may it be string/array/object or function

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

const friend = {
    friendname : "Ravi",
    age: "20"
}

const brother = {
    brothername : "Pratyush",
    age: "21"
}

const user = {
    username: "Satvick",
    age: "21",
    __proto__ : brother       // this is how we can share the variables and methods of another object to this one
}

// Remember only user will have the access to the properties of brother but brother will not have the access of the properties of user( it works only one way)


// brother.__proto__ = friend;                            

// console.log(user.friendname)                           //   Ravi
console.log(user)                                      //  { username: 'Satvick', age: '21' }

// console.log(brother.username)                          // undefined


// modern syntax

Object.setPrototypeOf(brother, friend)

console.log(user.friendname)                           //   Ravi
