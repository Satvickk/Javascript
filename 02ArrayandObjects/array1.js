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