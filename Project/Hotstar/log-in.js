function getUserInput(value) {
    let input = document.getElementById(value).value;
    return input;
}

function userInput(n, m, e, u, p){
    this.name = n
    this.phone = m
    this.email = e
    this.username = u
    this.password = p
}

let users = [];

function registerUser(){
    const name = getUserInput(`name`);
    const phone = getUserInput(`phone`);
    const email = getUserInput(`email`);
    const username = getUserInput(`username`);
    const password = getUserInput(`password`);
    // console.log(name);

    let user = new userInput(name, phone, email, username, password)
    console.log(user);
    users.push(user);
    localStorage.setItem(`user`, JSON.stringify(users))
}

function loginUser(){
    const username = getUserInput(`login-username`);
    const password = getUserInput(`login-password`);
    // console.log(username);
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    
    user.forEach(element => {
        if(username === element.username && password === element.password){
            alert(`Login Successfully`);
        }
    });
}