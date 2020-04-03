let names = ["Krish", "Manoj", "Rajesh"];

let resultDiv = document.querySelector("#resultDiv");
let textName = document.querySelector("#name");

const deleteUser = (name) => {
    names = names.filter(ele => ele !== name);
    showResult();
}
const indexOf = (name) => {
    for (let i = 0; i <= names.length; i++) {
        if (names[i] === name) {
            return i;
        }
    }
    return -1;
}
let index = -1;
const editUser = (name) => {
    index = indexOf(name);
    textName.value = name;
}

textName.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
        let textField = document.querySelector("#name");
        let name = textField.value;
        if (name.trim().length > 0 && index == -1) {
            names.push(name);
        } else {
            names[index] = name;
            index = -1;
        }
        showResult();
        textField.value = "";
    }
})

const showResult = () => {
    let data = "<ul class='list-group'>";
    for (let name of names) {
        data += `<li class="list-group-item">${name} 
        <i class="fa fa-edit  float-right mr-2" onClick=editUser('${name}') ></i>
        <i class="fa fa-trash float-right mr-2" onClick=deleteUser('${name}')></i>
        </li>`
    }
    data += "</ul>";
    resultDiv.innerHTML = data;
}

showResult();

// ToDo Application starts from here

let toDOIndex = -1;

let toDos = ["Complete Java Script Arrays", "Send Report to TL"];

let toDo = document.querySelector("#todo");

toDo.addEventListener('keyup', (event) => {

    if (event.key === 'Enter') {
        let toDoName = document.querySelector("#todo");
        if (toDOIndex === -1) {
            toDos.push(toDoName.value);
        } else {
            toDos[toDOIndex] = toDoName.value;
            toDOIndex = -1;
        }

        toDoName.value=""
    }
    showToDo();
})

const editToDo = (str) => {
    toDOIndex = toDos.indexOf(str);
    document.querySelector("#todo").value = str;
}


const deleteToDO = (str) => {
    let index = toDos.indexOf(str);
    if (index !== -1) {
        toDos.splice(index, 1);
    }
    showToDo();
}

const showToDo = () => {
    let toDoList = document.querySelector("#toDoList");
    let data = "<ul class='list-group'>";
    for (let toDo of toDos) {
        data += `<li class="list-group-item">${toDo} 
        <i class="fa fa-edit  float-right mr-2" onClick="editToDo('${toDo}')" ></i>
        <i class="fa fa-trash float-right mr-2" onClick="deleteToDO('${toDo}')"></i>
        </li>`
    }
    data += "</ul>";
    toDoList.innerHTML = data;
}
showToDo();
