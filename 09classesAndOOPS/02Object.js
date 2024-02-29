// JavaScript has prototyple behaviour : it means that just like prototype object only ends it nesting when it founds null 

// in simple language javascript never give up if it will not find a value in its current context it will move one level up in the parent context to find the same variable and it will continue to do so unless it finds the value it is looking for or finds a null

// due to this behaviour we get new keyword(constructor method), this keyword(current context), classes and many other functionality


// Everything in javascript is object !
// it is true because objects are the basic unit of every data structure of javascript e.g
// an array will always has an prototype:Array and further this array prototype will have an prototype:Object and after that there is no prototype because there is prototype:null value after that (object does not have any parent to refer, infact Objects are the basic unit on js). thus array ,object, string and even functions also are somewhat an object

//this is also called as prototypal inheritence and due to this these data structure also have the properties like of object
/*

    Array--------------> Object --------------> null
    String-------------> Object --------------> null
    Function ----------> Object --------------> null
    Object ------------> Object --------------> null

*/

// for example: -

function printME(username) {
    console.log(username);
}

printME.score = 2;

// printME("satvick")                                 // satvick
// console.log(printME.score)                         // 2
// console.log(printME.prototype);                    // {} empty object - you know why

// thus it proves that function also behaves like an object. now here the empty object is this of the current method printME


function result(sub, marks){
    this.sub = sub;
    this.marks = marks;
}


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

resultOne.increase()
resultTwo.print()
resultOne.print()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/