const num = new Number(100);

// console.log(num);       // => gives us an object with Number 100

// console.log(num.toString());    // => gives 100 but in type string
// console.log(num.toFixed(2));       // => gives a string type number with 2 decimal places after the number

// console.log(Math);        // => we have a Math object in js which contains all the function of math

// console.log(Math.random());    // =>  returns a random number between 0 and 1

const num2 = 34.4
const num3 = 34.6
// console.log(Math.round(num2));          // => round of the number as we know
// console.log(Math.round(num3));

// console.log(Math.ceil(num2));           // => always round-up the number - to the ceiling
// console.log(Math.floor(num3));          // => always round-down the number - to the floor

let min = 10;
let max = 20;

// suppose if we want a random number between min and max number :

const formula = Math.floor(Math.random() * (max - min + 1 ) + min)

// console.log(formula);

// let's dry run this formula :
/*

Math.random() will give us random number between 0 and 1 but not 0 or 1



*/