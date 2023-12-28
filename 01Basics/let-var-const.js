// we have tow types o declaration const for constants and var,let for variables

const state = 20;   //integer - value cannot be changed
let value = 30;     //integer
var Number = 40;    //integer
string = "Rahul";   //string
let Id ;            //undefined - beacuse variable declared but the value was not assigned

console.table([state,value,Number,string,Id]);

// var is not used because of scope problem, instead we use let and const