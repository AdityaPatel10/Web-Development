function xyz(){
    let x = "Hello Peoples";
    console.log(`x: `, x);
}

let id = setInterval(xyz, 1);
clearTimeout(id);