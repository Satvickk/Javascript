function setUser(username) {
    this.username = username
}


function createUser(username, password, email) {
    this.password = password;
    this.email = email
    // setUser(username)             // here it looks like we are calling the Function in real we are just passing the reference
    setUser.call(this, username)             // here we are passing the current context 'this' (optional) of function createUser to setUSer with call method ()
    
}

// we use call because in the call stack the setUser will be called , executed and freed from memory thus we will not have the username, thus we use call in which the current context 'this' of createUser is passed to setUser so that the value of username will be set to the createUser's context 'this' and even after the function setUser is removed from the memory we will have the value of username in createUser's this


const userOne = new createUser("satvick", "123", 'satvick@gmail.com')
console.log(userOne);                     // dont forget to use new keyword