
// this is a simple function
function sayMyName( username) {
    if(username === "Satvick"){
        console.log("You're Goddamn Right!");
        console.log(`The username is ${username}`);              // we can also use string interpolation with functions
    }
}

// sayMyName("Satvick")

// const store = sayMyName('Satvick')
// console.log(store);                            //this will return undefined because we have not returned anything


function add( one=0, two=10) {        // in this way we can assign a default value to the variable
    return one+two
}

const result = add(2)
// console.log(result);                 // 12   because we have returned a value


// Rust Operator   ...

// if 3 dot ... are used anywhere other than functions then they are called spread operators but when used in functions it is known as Rust operator

function getPrice( price1, price2, ...price3){
    // console.log("Price1", price1);
    // console.log("Price2", price2);
    // console.log("Price3", price3);

    return price1 + price2 + price3
}

//  const result2 = getPrice(200, 300, 400, 500, 600, 700)
// console.log(result2)                                              // this will return 500400,500,600,700 simple values not an array

// Price1 200
// Price2 300
// Price3 [ 400, 500, 600, 700 ]

//  here in the above function we have that the first and the second value are stored in the price1 and price2 but the rest of the values are stored as an array inside the price3 variable because of the rest operator

// We can pass objects in functions

let myObject ={
    name: "satvick",
    age: 21,
    gender: "male"
}

function show(obj) {
    console.log(`Your name is ${obj.name}, you are ${obj.age} years old and you are a ${obj.gender}`);
}

// show(myObject)

// similarly we can use array also 


// Scope =====================================================================================================


// let and const are function scope variable wheareas var is global scope variable

var c = 3

function check() {
    let a = 1
    const b = 2
    

    console.log(a);
    console.log(b);
    console.log(c);
}

// check()

// console.log(a);             // undefined
// console.log(b);             // undefined
// console.log(c);                                     // 3

// thus var is not used most of the time 

if(true){
    // console.log("js");
}

// the curly braces are  known as scope 

const username = "Satvick"

if(true){
    // console.log(username);
    const value = 20
    // console.log("inside scope", value);
}

// console.log(value);

// from the above exaple it is cleared that the parent scope cannot access the variables of the child scope but the child scope can access the parent's variable



// +++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++

// console.log(addone(5))

function addone(num){
    return num + 1
}

// in javascript we can access the functions and variables before there declaration because javascript will first create the variable and assigned them undefined and after that they will intialise them with the value in case of variable and with definitions in case of functions that is why we can access the functions before there definittion but in case of variable we will always get a value of undefined because the value will not be assigned before





// Arrow Functions ===========================================================

// this keyword - it refers to the current context of the scope in browser it holds window object and in node environment it holds empty object {}

const myObject2 = {
    username : "sam",
    password : "123abc",


    welcomemessage : function welcomeMessage() {
        console.log(`Hi, ${this.username} your password is ${this.password}`);          // here this refes to the current context of the object myObject2
        return this
    }
}


// myObject2.welcomemessage();

// console.log(this);                      // {}   constext of node environment

// console.log(myObject2.welcomemessage());                 

//  this is the current context of the function welcomeMessage

// {
//   username: 'sam',
//   password: '123abc',
//   welcomemessage: [Function: welcomeMessage]
// }



// this is an arrow function syntax
const addNums = (num1 , num2) => {
    return num1 + num2
}

// console.log(addNums(2,4))


function ContainsThis() {
    // console.log(this);
}
// ContainsThis()
//  the normal functions returns 

{/* <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter]
} */}



const doesNotContainThis = () => {
    console.log(this);
}
// doesNotContainThis()

// the arrow function returns empty object {}



// Returning a function 

// if add = (a,b) => a+b                  // this is implicitly return
// if add = (a,b) => (a+b)                // this is also implicitly return

// but if we used curly brackets the we have to write return keyword explitcitely  

//  sub = (a,b) => { return b-a }

//  to return an object we use show = () => ({username: "Satvick"})




// IIFE (immedieately invoked function expression)==========================================================================

// (function wrapUp() {
//     console.log("Wrap Up!");
// })();

// (function hello(username) {
//     console.log(`Hello ${username} how are you !`);
// })("satvick");

// use line break (semi-colon) after every iffe so that the js engine would know where the iffe end else it will throw an error 