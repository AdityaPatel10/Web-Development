document.querySelector("form").addEventListener("submit", todo);

  function todo(event) {
    event.preventDefault();
    let task_item = document.querySelector("#task").value;
    let prior = document.querySelector("#Priority").value;

    let row = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = task_item;

    let td2 = document.createElement("td");
    td2.innerText = prior;
    if (prior == "High") {
      td2.style.backgroundColor = "red";
    } else {
      td2.style.backgroundColor = "green";
    }

    let td3 = document.createElement("td");
    td3.innerText = "Delete";
    td3.style.color = "red";
    td3.addEventListener("click", function () {
      row.remove();
    });

    row.append(td1, td2, td3);
    document.querySelector("#tbody").append(row);

    document.querySelector("#task").value = "";
    document.querySelector("#Priority").value = "";
  }