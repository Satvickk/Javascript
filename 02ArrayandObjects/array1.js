let myArr = [1, 2, 3, 4, "satvick", true]

// array makes shallow copies - means a copy of an object whose value share the same reference point (heap)
// deep copies - a copy of an object whose value share differet reference point (stack)

let myArr2 = new Array(1, 2, 3, 4, 5, 6);

// console.log("length", myArr2.length);
// console.log("element", myArr2[3]);

myArr2.push(7);
// console.log("push", myArr2);

myArr2.pop();
// console.log("pop", myArr2);

myArr2.shift();          
// console.log("shift", myArr2);

myArr2.unshift(1);       //unshift is not optimise method because it shifts the whole array thus it not used mostly
// console.log("unshift", myArr2);

// console.log("includes", myArr2.includes(5));
// console.log("indexof", myArr2.indexOf(4));

const myArr3 = [9, 8, 0]
const res = myArr3.join();         // one of mostly used - return same elements of the array but in string type

// console.log(myArr3);
// console.log(res);


// important for interviews

// console.log("slice", myArr2.slice(1,4));         //returns array of element of array from index 1 to index 3 leaving the 4th one
// console.log("myArr2",myArr2);

// console.log("splice", myArr2.splice(1,4));      //return array of elements start from index 1 (include) to the next 4 elements
// console.log("myArr2",myArr2);             
// the point to note is that slice does not change the original array but splice does


// -------------------------------------------------- Array in Depth -------------------------------------------------------

const marvel = [ "Ironman", "Thor", "Spiderman"];
const dc = [ "superman", "batman", "flash"];

// console.log(marvel.push(dc));   // will give an array where the whole dc array will be 4th element 

// console.log(marvel.concat(dc));   // this will return a new array with all the element


// we prefer ... spread operator more because we can concat more than one array just by spreading it


const newArray = [...marvel, ...dc]
// console.log(newArray);    
// the spread operator spread the array into individual elements and make a new array from those element



// for a wierd situation

const wierdArray = [1, 2, 3, [2, 3, 5, [5, 6, 7, 8, [2,3], 9 ,7 ], 87, 9, 0], 9 ]

// console.log(wierdArray.flat(Infinity));  // this will give us a new array with all the elements



// ================================================== OBJECTS =========================================================

// singleton are created when we create an object using constructor method i.e Object.create

// here we will be using object literals 

const mysym = Symbol("Symbol is used to declare a value unique")

const obj = {
    name: "satvick",
    age: "21",
    "phone number": "123456789",
    [mysym] : mysym                          //we have declared a key which have a value that point towards the Symbol mysym
}

//an object key is converted into a string by js thus we can either use string or just declare the key without "" or ''

// console.log(obj.name);       //traditional way of using objects

// console.log(obj["name"])    // another way of accessing the object



// console.log(obj.phone number);        // this will not work because we cannot access the key with spaces !!


// console.log(obj["phone number"]);       //thus we can access using this notation


// for interveiw question -> create a symbols use is value to declare an object and the access the value of same symbol from within the object

// console.log(typeof obj[mysym]);

obj.age = 20;
// console.log(obj.age);

// Object .freeze(obj);                  // we can also freez the object such that no further changes can be done

obj.age = 50;
// console.log(obj);

// we can also pass a functions in an object

obj.greeting = function () {
    console.log("hello obj user")
}

// console.log(obj.greeting);          // here we are passing the reference of the function
// console.log(obj.greeting());        // here we are calling the function itself


obj.greet = function () {
    console.log(`hello obj user ${this.name}`);   // this.property is used toaccss the value of the same object
}

// obj.greet();


// ========================================== Advance in object =====================================

const student = new Object ();           // this is a singleton object

student.name = "satvick";
student.id = "123cd";
student.class = "1st";

// console.log(student);

//we can nest objects also ;

const obj1 = { 1: 'a', 2: 'b'};
const obj2 = { 3: 'c', 4: 'd'};
const obj3 = { 5: 'e', 6: 'f'};

// we can combine these objects in one of two ways

const mainObj = {...obj1, ...obj2, ...obj3}           // by spreading mostly used

const another_mainObj = Object.assign({}, obj1, obj2, obj3)  //the first empty object is called target object which will we get in the result with all elements and the other are called source objects that all will be combined

// console.log(mainObj);
// console.log(another_mainObj);            // more or less both gives us the same result    for more visit mdn


//suppose we have an api data 

const data = [
    {
        id: 1,
        color: "red"
    },
    {
        id: 2,
        color: "blue"
    },
    {
        id: 3,
        color: "green"
    },
    {
        id: 4,
        color: "yellow"
    }
]

// console.log(data);

// console.log(Object.keys(student));                           //this will return an array of all the keys
// console.log(Object.values(student));                         //this will return an array of all the values

// console.log(Object.entries(student));                          // this will return an array or multiple array which will contain all the key value pair inside a seperate array

// console.log(student.hasOwnProperty('name'));            //this will check for the property in the given object, returns boolean
