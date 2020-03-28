let contacts = [
    { name: "Krish", email: "krish.t@gmail.com", age: 37 },
    { name: "Manoj", email: "manoj.pvn@gmail.com", age: 38 },
    { name: "Ramesh", email: "ramesh.b@gmail.com", age: 35 },
    { name: "Naresh", email: "naresh.n@gmail.com", age: 27 },
    { name: "Suresh", email: "suresh.t@gmail.com", age: 19 }
]

let content = document.querySelector("#content");
let headings = ["Name", "Email", "Age", "Edit/Delete"];

const contactForm = document.querySelector("#contactForm");
const btnSubmit = document.querySelector("#btnSubmitAdd");

document.querySelector("#btnSubmitAdd").removeAttribute('disabled');
document.querySelector("#btnSubmitUpdate").setAttribute('disabled',true);

const deleteContact = function(email){
    bootbox.confirm({
        message: `Are you sure to delete email: ${email} ?`,
        buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        callback: function (result) {
           //Logic to perform action 
        }
    });
    console.log("Requested for deletion of email:",email);
}
const editContact = function(email){
    console.log("Edit is clicked");
    const contact = contacts.filter(ele=>ele.email === email)[0];  
    console.log(contact);
    document.querySelector("#email").setAttribute('disabled',true);
    document.querySelector("#btnSubmitAdd").setAttribute('disabled',true);
    document.querySelector("#btnSubmitUpdate").removeAttribute('disabled');
    if(content){
        contactForm.name.value = contact.name;
        contactForm.email.value = contact.email;
        contactForm.age.value = contact.age;

    }
}

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
           <td>
           <i class='fa fa-edit ml-2' onclick="editContact('${c.email}')">
           <i class='fa fa-trash ml-2' onclick="deleteContact('${c.email}')"></td>`;
        table += "</tr>";

    })
    table += "</table>";
    content.innerHTML = table;
};

showTable();


btnSubmit.addEventListener('click',(event)=>{
    event.preventDefault();
    let name = contactForm.name.value;
    let email = contactForm.email.value;
    let age = contactForm.age.value;
    const contact = {name:name,email:email,age:age};
    contacts.push(contact);
    contactForm.reset();
    showTable();
})