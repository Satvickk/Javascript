function setUser(username) {
    this.username = username
}


function createUser(username, password, email) {
    this.password = password;
    this.email = email
    setUser.call(this, username)             // here we are passing the current context of function createUser to setUSer with call method
    
}

// we use call because in the call stack the setUser will be called , executed and deleted from memory thus we will not have the username this we use call in which the current context is passed so that the value is set and even after the function setUser is removed from the memory we will have the value 

console.log(new createUser("satvick", "123", 'satvick@gmail.com'));                     // dont forget to use new keyword