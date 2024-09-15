function append(){
    let data = JSON.parse(localStorage.getItem("Students")) || [];
    let container = document.getElementById("container");
    container.innerHTML = null;

    data.forEach(function (el, index){

        let div = document.createElement("div");

        let name = document.createElement("p");
        name.innerText = el.name;

        let course = document.createElement("p");
        course.innerText = el.course;

        let uid = document.createElement("p");
        uid.innerText = el.uid;
        let btn = document.createElement("button");

        btn.innerText = "remove"
        btn.addEventListener('click', function(){
            remove(index);
        })

        div.append(name, course, uid, btn);

        container.append(div);
    })
}
append();

function remove(index){

    let data = JSON.parse(localStorage.getItem("Students")) || [];

    let newData = data.filter(function(el, i){
        if(i == index){

            let trash = JSON.parse(localStorage.getItem("Trash")) || [];
            trash.push(el);
            localStorage.setItem("Trash", JSON.stringify(trash));
        }
        else{
            return i !== index;
        }
    })
    console.log(index);
    localStorage.setItem('Students', JSON.stringify(newData));
    append();

    //This part is to remove the data from the container
}