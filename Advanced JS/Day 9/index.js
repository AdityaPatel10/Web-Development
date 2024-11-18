const { application } = require("express");

function getData(n, e) {
  this.name = n;
  this.email = e;
}

async function abc() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let obj = new getData(name, email);
  let res = await fetch("https://api.example.com/data", {
    // by-default method is set to 'GET'
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = await res.json();
  console.log(data);
}
