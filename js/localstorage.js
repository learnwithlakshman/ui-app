/*const profile =  {
    "empno": 1007,
    "ename":"Lakshman",
    "is_working":true,
    "email":["lakshman.a@heraizen.com","lakshman.miani@gmail.com"],
    "address":[
       {
       "city":"Bangalore",
       "state":"KA",
       "zipcode":560070
            },

       {
       "city":"Guntur",
       "state":"AP",
       "zipcode":522612
            }
   ]

} 
localStorage.setItem("profile",JSON.stringify(profile));
s_profile = JSON.parse(localStorage.getItem("profile"));
console.log(s_profile.ename);
console.log(s_profile.address);
sessionStorage.setItem("user","Krishna"); */

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