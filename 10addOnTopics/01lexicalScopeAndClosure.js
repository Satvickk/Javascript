// lexical Scope : - a child function can have the access to the properties of the parent function thus the functional scope of the parent will be the lexical scope of the child function in this case childrenOne

function Parent(){
    const money = 200;

    // console.log(icecream)                      // parent does not have the access to the properties of the children
    function childrenOne(){
        const icecream = "Vanilla"
        console.log(money)                       // children have the access to the properties of parent
    }

    function childrenTwo(){
        // console.log(icecream)                 // sibling functions do not have the access of the properties of each other
        console.log(money)
    }

    childrenOne();
    childrenTwo();
}

// Parent()


// closure  - when a child function is called outside the parent function it can still be able to access the properties of the parent function because whenever the child function will be executed it will always have the lexical scope of the parent not matter the parent is executed earlier or not in the call stack its lexical scope will be available for the child an this is called Closure.


// example


function Teacher(){
    const sub = "Maths";
    const marks = 60;

    function student(){
        console.log(`You have scored ${marks} marks in ${sub} subject`)
    }

    return student
}

const res = Teacher();
// console.log(res)
res()                       // Yous have scored 60 marks in Maths subject