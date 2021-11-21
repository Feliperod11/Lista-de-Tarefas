let limit_task = 0;
let arraysElements = [];

// adding element to our list

let addBtn = document.getElementById("imgAddBtn");
addBtn.addEventListener("click", addElement);

function addElement(){

    let valueInput = document.getElementById("input_list");

    let li = document.createElement("li");
    li.setAttribute("class", "li_id")
    li.innerText = valueInput.value;

    let list_li = document.getElementById("list_elements");

    if (limit_task == 10){
        alert("Maximum task limit!")
    }
    else if (valueInput.value == "") {
        alert("Enter some value in the text field.")
    }
    else {
        list_li.appendChild(li);
        limit_task++

        valueInput.value = "";
        valueInput.focus();

        arraysElements.push(li.innerText);
    }
    let storage_list = function(){
        let local = list_li.innerHTML;
        localStorage.setItem("list", JSON.stringify(local));

        let task = limit_task;
        localStorage.setItem("limit", task)
    }

    storage_list();
}

// remove element's

let delAll = document.getElementById("imgTrashBtn");
delAll.addEventListener("click", removeAll);

function removeAll(){
    list_elements.innerHTML = "";
    limit_task = 0;
    localStorage.clear();

    for(let i = 0; i < arraysElements.length; i++){
        arraysElements.splice([i], 10)
        location.reload();
    }
}

// persist the data

onload = function(){
    // storage list elements
    let list_storage = localStorage.getItem("list")
    list_elements.innerHTML = JSON.parse(list_storage)

    // count storage limit task
    let task_storage = this.localStorage.getItem("limit")
    limit_task = task_storage;
}