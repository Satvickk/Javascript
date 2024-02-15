// for-of loop

const numbers = [1, 9, 5, 3, 7, 8]

for(const num of numbers){
    // console.log(num + 2);  
}


const greeting = "Hello World"

for(const greet of greeting){
    // console.log(greet);
}


// maps - ( maps are kind of like objects)

const dawn = new Map()

dawn.set('apple', 'red')
dawn.set('banana', 'yellow')
dawn.set('grapes', 'green')
dawn.set('orange', 'orange')

// console.log(typeof dawn);

for(const [key, value] of dawn){                               // the destructuring works only on map not on any ordinary object
    // console.log(`the value ${value} is of key ${key}`);
}


const myObject = {
    apple: 'red',
    banana: 'yellow',
    grapes: 'green',
    orange: 'orange'
}

// for(const [key, value] of myObject){                                    //this gives an error of " not iterable "
//     console.log(`the value ${value} is of key ${key}`);
// }




// for-in loop ===================================================================================

for(const key in numbers){
    // console.log(numbers[key]);
}

for(const key in myObject){
    // console.log(`${key} is the key and ${myObject[key]}`);
}

for(const key in dawn){
    // console.log(key);                  // this will not work because maps are not iteratable with for-in loops
}



// forEach loop ===================================================================

// numbers.forEach((item,index,Array) => (
//     console.log(item, index, Array)
// ))

// or

function print(item) {
    console.log(item);
}

// numbers.forEach(print)

// forEach loop is helpful for iterating on an api response but remember it do not return any thing except it will return undefined it we try to return explicitely

const coding = ["js", "ruby", "java", "python", "cpp"]


const values = coding.forEach( (item) => {
    //console.log(item);
    return item
} )

// console.log(values);                                  // undefined


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach(item => {
    // console.log(`the extension ${item.languageFileName} is used for ${item.languageName}`);
});