//Promise 1
const promiseOne = new Promise((resolve, reject) => {
        //Do an async task
    // DB calls, cryptography, network
    setTimeout(() => {
        // console.log("Task completed");
        resolve()
    }, 2000);
})

promiseOne.then(() => {
    // console.log("Promise one is completed");
})



//Promise 2
new Promise((res, rej) => {
    setTimeout(() => {
        // console.log("Task 2 completed");
        res()
    }, 1000);
}).then(() => {
    // console.log("Promise two is completed");
})


//Promsie 3

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({username: "Satvick", age: "21"})
    }, 1000);
})

promiseThree.then((resp) => {
    // console.log(resp.username);
})



//Promise 4
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        const error = true
        if(!error){
            resolve({username: "Satvick", age: 21})
        }else{
            // console.log("Something went wrong!");
        }
    }, 1500);
})

promiseFour.then(function (resp) {
    return resp.username;
})
.then((username) => {
    // console.log(`hello ${username}! How are you ?`);
})
.catch((error) => {
    // console.log(error);
})
.finally(()=>{
    // console.log("Your promise is either resolved or rejected");
})


//Promise 5 - (Promises can be used with async await also)

const promiseFive = new Promise ((resolve, reject) => {
    setTimeout(() => {
        const error = false;
        if(!error){
            resolve({username: "Javascript", password: 1234})
        }else{
            console.log("Something went wrong! Can't load JavaScript");
        }  
    }, 1000);
})

async function getPromiseFive() {
    try {
        const resp = await promiseFive;
        console.log(resp);              
    } catch (error) {
        console.log(`Error: please resolve this error ${error}`);
    }
}

// getPromiseFive();


// fetch start

// async function getUser() {
//     try {
//         const Resp = await fetch('https://jsonplaceholder.typicode.com/users');
//         let Results = await Resp.json()
//         console.log(Results.map((item) => item.name));
//     } catch (error) {
//         console.log("Something Went Wrong!");
//     }
// }

// getUser();


// fetch with .then syntax

const data = fetch('https://jsonplaceholder.typicode.com/users')

data.then((resp) => {
    return resp.json()
})
.then((result) => {
    console.log(result.map((i) => i.name));
})
.catch((error) => {
    console.log("there might be an error while fetching");
})
.finally(()=> {
    console.log("fetch was executed");
})