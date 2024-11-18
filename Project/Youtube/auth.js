class User {
    constructor() { }
    #checkUserName(username) {
        let value = username.includes("#") ? false : true;
        return value;
    }

    #checkPassword(password) {
        let value = password.length > 8 ? true : false;
        return value;
    }

    async signUp(n, m, e, u, p) {
        let validate = this.#checkUserName(u) && this.#checkPassword(p);
        if (validate) {
            this.name = n;
            this.phone = m;
            this.email = e;
            this.username = u;
            this.password = p;

            let actual_data = JSON.stringify(this);
            try {
                let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
                    method: "POST",
                    body: actual_data,
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                let data = await res.json();
                console.log(data);
            } catch (error) {
                console.log("Error");
            }
        }
    }
}

let user = new User();

function getUserInput(value) {
    let input = document.getElementById(value).value;
    return input;
}

function registerUser() { 
    const name = getUserInput(`name`);
    const phone = getUserInput(`phone`);
    const email = getUserInput(`email`);
    const username = getUserInput(`username`);
    const password = getUserInput(`password`);
    user.signUp(name, phone, email, username, password)
}

function loginUser(){
    const username = getUserInput(`login-username`);
    const password = getUserInput(`login-password`);
//     let user = JSON.parse(localStorage.getItem('user'));
//     console.log(user);
//     user.forEach(element => {
//         if(username === element.username && password === element.password){
//             alert(`Login Successfully`);
//         }
//     });
}
