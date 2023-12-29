const name = "satvick"
const score = 23

const str = `The player name is ${name} and has scored ${score} points`

// console.log(str);

const newName = new String("Harsh-has-colors")   // it is a constructor method which creates an Object of string with length and other properties

// console.log(newName[4]);
// console.log(typeof newName);          // => object because array is also an objet
// console.log(newName.length);          // => 16

// console.log(newName.__proto__);         // => {}  gives an object here it is empty but in browser it will have inbuild functions

// console.log(newName.toUpperCase());        // => HARSH-HAS-COLORS

// console.log(newName.charAt(4));             // => h - returns value at the index
// console.log(newName.indexOf('o'));          // => 11 - return the index of the value 
// console.log(newName.includes('-'));         // => true - checks if the value is present in the string or not


const mystr = "      this is a sentence with spaces  "
// console.log(mystr.trim());                  // => removes spaces from start and end not from in between


let str2 = "this is a string"

// console.log(str2.replace(' ',"-"));        // replace the first occurance only
// console.log(str2.replaceAll(' ',"-"));     // replace all the occurance 

// console.log(str2.split(' '));            // returns an array of the each word as an individual string  [ 'this', 'is', 'a', 'string' ]
