let contacts = [
    { name: "Krish", email: "krish.t@gmail.com", age: 37 },
    { name: "Manoj", email: "manoj.pvn@gmail.com", age: 38 },
    { name: "Ramesh", email: "ramesh.b@gmail.com", age: 35 },
    { name: "Naresh", email: "naresh.n@gmail.com", age: 27 },
    { name: "Suresh", email: "suresh.t@gmail.com", age: 19 }
]

let content = document.querySelector("#content");
let headings = ["Name", "Email", "Age", "Edit/Delete"];

let contactIndex = -1;

let contactObj = null;

const contactForm = document.querySelector("#contactForm");
const btnSubmit = document.querySelector("#btnSubmitAdd");
const btnUpdate = document.querySelector("#btnSubmitUpdate");


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


const init = () => {
    document.querySelector("#btnSubmitAdd").removeAttribute('disabled');
    document.querySelector("#btnSubmitUpdate").setAttribute('disabled', true);
    document.querySelector("#email").removeAttribute('disabled');
    contactIndex = -1;
    contactForm.reset();
    showTable();
}


btnUpdate.addEventListener('click', (event) => {
    event.preventDefault();
    if (contactIndex > -1) {
        let name = contactForm.name.value;
        let email = contactForm.email.value;
        let age = contactForm.age.value;
        const contact = { name: name, email: email, age: age };
        contacts[contactIndex] = contact;
    }
    init();

})

const editContact = function (email) {
    console.log("Edit is clicked");
    contactObj = contacts.filter(ele => ele.email === email)[0];
    document.querySelector("#email").setAttribute('disabled', true);
    document.querySelector("#btnSubmitAdd").setAttribute('disabled', true);
    document.querySelector("#btnSubmitUpdate").removeAttribute('disabled');
    if (contactObj) {
        contactForm.name.value = contactObj.name;
        contactForm.email.value = contactObj.email;
        contactForm.age.value = contactObj.age;
        contactIndex = contacts.indexOf(contactObj);
    }
}


btnSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    let name = contactForm.name.value;
    let email = contactForm.email.value;
    let age = contactForm.age.value;
    const contact = { name: name, email: email, age: age };
    contacts.push(contact);
    init();
})


const deleteContact = function (email) {
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
            if (result) {
                contacts = contacts.filter((contact) => contact.email !== email)
            }
            init();
        }
    });
    console.log("Requested for deletion of email:", email);
}

init();