let contacts = [
    { name: "Krish", email: "krish.t@gmail.com", age: 37 },
    { name: "Manoj", email: "manoj.pvn@gmail.com", age: 38 },
    { name: "Ramesh", email: "ramesh.b@gmail.com", age: 35 },
    { name: "Naresh", email: "naresh.n@gmail.com", age: 27 },
    { name: "Suresh", email: "suresh.t@gmail.com", age: 19 }
]

let content = document.querySelector("#content");
let headings = ["Name", "Email", "Age", "Edit/Delete"];

const showTable = () => {
    let table = "<table class='table table-striped'";
    table += "<th>";
    headings.forEach(h => {
        table += `<th>${h}</th>`
    })
    table += "</th>";
    contacts.forEach(c => {
        table += "</tr>";
        table += `<td>${c.name}</td><td>${c.email}</td><td>${c.age}</td>
           <td><i class='fa fa-edit ml-2'><i class='fa fa-trash ml-2'></td>`;
        table += "</tr>";

    })
    table += "</table>";
    content.innerHTML = table;
};

const addContact = ()=>{
    name = "Lakshman";
    age = 37;
    email = "lakshman.a@gmail.com"
    let contact = {name:name,email:email,age:age};
    contacts.push(contact);
    showTable();
};
showTable();
addContact();
