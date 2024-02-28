// JavaScript has prototyple behaviour : it means that just like prototype object only ends it nesting when it founds null 

// in simple language javascript never give up if it will not find a value in its current context it will move one level up in the parent context to find the same variable and it will continue to do so unless it finds the value it is looking for or finds a null

// due to this behaviour we get new keyword(constructor method), this keyword(current context), classes and many other functionality


// Everything in javascript is object !
// it is true because objects are the basic unit of every data structure of javascript e.g
// an array will always has an prototype:Array and further this array prototype will have an object prototype and after that there is not prototype because there is null value after that (object does not have any parent to refer). thus array ,object, string and even functions also are somewhat an object

//this is also called as prototypal inheritence and due to this these data structure also have the properties like of object
/*

    Array--------------> Object --------------> null
    String-------------> Onject --------------> null
    Function ----------> Object --------------> null

*/

// for example: -

function printME(username) {
    console.log(username);
}

printME.score = 2;

printME("satvick")                                 // satvick
console.log(printME.score)                         // 2
console.log(printME.prototype);                    // {} empty object - you know why

