function Student (n, c, u){
    this.name = n;
    this.course = c;
    this.uid = u;
}

function storeData(event){
    event.preventDefault();
    let form = document.getElementById("students_data");
    let name = form.name.value;
    let course = form.course.value;
    let uid = form.uid.value;

    // console.log(name, course, uid);
    
    let s1 = new Student(name, course, uid);
    // console.log(s1);
    let data = JSON.parse(localStorage.getItem("Students")) || [];
    data.push(s1);
    localStorage.setItem('Students', JSON.stringify(data));
    // localStorage.clear()
    Calculate();
}

function Calculate(){
    let data = JSON.parse(localStorage.getItem("Students")) || [];
    let obj = {};
    for(let i = 0; i < data.length; i++){
        if(obj[data[i].course] == undefined){
            obj[data[i].course] = 1;
        }
        else{
            obj[data[i].course]++
        }
    }
    // console.log(obj);

    let count = document.getElementById("count");
    count.innerHTML = null;  //bcz when ever we add new data it sould be refreshed
    
    let div = document.createElement('div');
    for(key in obj){
        let p = document.createElement('span');
        p.innerHTML = `${key} - ${obj[key]} | `;
        div.append(p);
    }
    count.append(div);
}