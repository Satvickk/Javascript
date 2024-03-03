// JavaScript has prototyple behaviour : it means that just like prototype object only ends its nesting when it founds null 

// in simple language javascript never give up if it will not find a value in its current context it will move one level up in the parent context to find the same variable and it will continue to do so unless it finds the value it is looking for or finds a null

// due to this behaviour we get new keyword(constructor method), this keyword(current context), classes and many other functionality

// The reason arrow functions do not have access to their own 'this' context is because arrow functions do not have their own 'this' binding. Instead, they inherit the 'this' value from the enclosing lexical context at the time they are defined, which is often the outer function or the global scope.



// Everything in javascript is object !
// it is true because objects are the basic unit of every data structure of javascript e.g
// an array will always has an prototype:Array and further this array prototype will have an prototype:Object and after that there is no prototype because there is prototype:null value after that (object does not have any parent to refer, infact Objects are the basic unit on js). thus array ,object, string and even functions also are somewhat an object

//this is also called as prototypal inheritence and due to this these data structure also have the properties like of object
/*



                     Array-------------------  
                                            |
                                            |
    String -------------                    |
                       |                    |
                       |                    |
                       ------------------- Object ----------------->  null
                                            | 
                                            |                         
         Function ---------------------------                         
                                                                                                                                              

*/

// for example: -

function printME(username) {
    console.log(username);
}

printME.score = 2;

// printME("satvick")                                 // satvick
// console.log(printME.score)                         // 2
// console.log(printME.prototype);                    // {} empty object - you know why(this is the 'this' of the method printMe)

// thus it proves that function also behaves like an object. now here the empty object is this of the current method printME


function result(sub, marks){
    this.sub = sub;
    this.marks = marks;
}

// this is how we can insert methods into prototype

result.prototype.increase = function () {
    this.marks = this.marks + this.marks
} 

result.prototype.print = function () {
    console.log(this.sub);
    console.log(this.marks);
}

// this matlab jis

const resultOne = new result("Maths", 50)
const resultTwo = new result("Science", 60)

// if we store the function inside the variable without using new keyword we will get an error message that the function increase on line 74 is undefined because we have not given the information about the function's existence therefore we have to use new keyword to pass the whole context of the function result

resultOne.increase()         // we can call the functions inside the prototype without writing .prototype.function infact we can directly access the function inside prototype
resultTwo.print()
resultOne.print()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype. remember behind the scene javascript gives constructor function through new keywod, not through class . but in the current changes ES6 a class keyword is introduced which is just a wrapper around the whole process but behind the scene the process is still same

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/