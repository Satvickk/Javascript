//  interview question : we know that value of pi in mth library is 3.14.. can we chane it to 4  

//  yes we can

// console.log(Math.PI)

const resp = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(resp);

const obj = {
    username: "satvick",
    password: "123",
    email : "123@gmail.com",
    check : function () {
        console.log("checked")
    }
}

// console.log(Object.getOwnPropertyDescriptor(obj, "username"));

// Object.defineProperty(obj,'username', {
//     Writable: false,                       // now the values of the object cannot be changed
//     enumerable: false                       // now the enumeration will not be able to perform on obj
// })


// for (const [key, value] of obj) {
//     console.log(`${key} : ${value}`)    // we get this error "Property description must be an object: undefined" because we cannot iterate/enumerate on the obj
// }

// but if we want to enumerate over the obj we have to set the property enumerate to true


Object.defineProperty(obj, 'username', {
    // writable: false ,             
    enumerable: true                       
})


for (const [key, value] of Object.entries(obj)) {
    if(typeof value !== 'function'){                      // it is a good practice to not give a function definition in an array
        console.log(`${key} : ${value}`)
    }
}