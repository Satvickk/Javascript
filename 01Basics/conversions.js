// we can convert datatypes in js

let value = 33;

let valueChanged = String(value)          // Number, String, Boolean

// console.log( valueChanged, typeof(valueChanged));  // string (types are always starts with small letters)

let number = "abc42"
let numberChanged = Number(number)    //NaN - not a number

// console.log( numberChanged, typeof(numberChanged));   // => NaN number

let flag = "true"
let flagchanged = Boolean(flag)

// console.log( flagchanged, typeof(flagchanged));       // => true boolean

let flag2 = ""
let flag2Changed = Boolean(flag2) 

// console.log(flag2Changed, typeof(flag2Changed));        // => "" = false ;  "satvick" = true

let flag3 = null
let flag3Changed = String(null)     // => Boolean = false ; Number = 0 ; String = null

console.log(flag3Changed, typeof(flag3Changed));

// remember here we are changing types from one to another sometimes we get the value NaN mean the conversion of datatype is done but the value cannot be converted