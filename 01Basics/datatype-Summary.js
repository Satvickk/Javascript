// Datatypes are of two types - (in javascript the datatypes are divided on the basis of reference(pass by reference) types and value type(pass by value) )

/*

js is statically typed or dynamically typed ?

PRIMITIVE - (pass by value - we )
7 types : string, null, undefined, symbol, number, boolean, bigInt


NON-PRIMITIVE (reference types) -
Array, Objects, Functions

*/


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ MEMORY +++++++++++++++++++++++++++++++++++++++
/*
we have two types of memory :

STACK - for primitive types, here we get the copy of the variable we define

HEAP - for non-primitive types, here we get the reference of the value

*/


/*

In stack everytime we copy the value a new memory location 'stack-block' is provided with the copied value of original value thus we have same value but different memory location therefore the change in copied values does not effect the original values.

but

In heap the values is stored at location, somewhere in heap so when we copy a variable from one to another we actually pass the reference of the original value to the copied variable , thus in this way both the variables copied and the original points to the same location in the heap therefore changing in the copied value also results changing in the original value as well.



               STACK                                                HEAP
        ######################                          ############################
        #                    #                          #                          #
        ######################                          #                          #
        #         val4(copy of val3------------------------->  {                   #
        ######################                          #       name: 'github',    #
        #        val3 -------------------------------------->   age: 21            #
        ######################                          #      }                   #
        # val2(copy of val1) #                          #                          #
        ######################                          #                          #
        #     val1           #                          #                          #
        ######################                          ############################

*/

let val1 = 10;
let val2 = val1;

val2 = 20;

// console.log(val1);      // => 10
// console.log(val2);      // => 20

let val3 = {
    name: "satvick",
    age: 21
}

let val4 = val3;
val4.name = "github";

console.log(val4);        // => { name: 'github', age: 21}
console.log(val3);        // => { name: 'github', age: 21}