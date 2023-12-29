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

// console.log(flag3Changed, typeof(flag3Changed));

// remember here we are changing types from one to another sometimes we get the value NaN mean the conversion of datatype is done but the value cannot be converted


// in the ecma documentation i found that in case of different operators javascript have different behaviour due to type coercion
/*

+ => if both or one of the operand is string perform concatenation else addition
-,*,/ => if both or one is string it is converted js tries to convert them into numbers and perform operation
<,=,<=,>= =>if one or both operand is string performs lexicorgraphic(dictionary) comparision
==,=== => '==' is used for check for value and '===' check for value and datatype
&& => performs short circuit operation, if first operand is falsy, it is returned else return the second one
|| => performs short circuit operation, if first operand is truthy, it is returned else second one is returned
! => '!' is not it reverse the value of the variable before it is used
falsy values (foenun)=>  false, 0, empty-string "", NaN, null, undefined
truthy values => all the values other than falsy are truthy values

*/

console.log(null > 0);   // => false
console.log(null == 0);  // => false
console.log(null >= 0);  // => true  - because in this comparision converts null into number i.e 0 

// remember comparision <,>,=<,>= and equality == and === works differently in js