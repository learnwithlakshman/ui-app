let labels = [];

const base_url = 'https://ipl2020-stat.herokuapp.com/ipl2020/';


const mySpinner = (load) => {
    const spinner = document.getElementById("myspinner");
    spinner.style.display = "none";
    if (load === true) {
        spinner.style.display = "block";
    }
}

const showPlayerInformation = function (players) {
    let tableData = document.querySelector("#tableData");
    let data = `<table class='table table-striped'>
                    <tr>
                        <th>Name</th>
                        <th>Label</th>
                        <th>Role</th>
                        <th>Price</th>
                    <tr>
                `;
    players.forEach(p => {
        data += `<tr>
                    <td>${p.name}</td><td>${p.label}</td><td>${p.role}</td><td>${p.price}</td>
                 </tr>
                `
    })
    data += `</table>`
    mySpinner(false);
    document.querySelector("#tableData").innerHTML = data;
}
const showTeamDetailInformation = (team) => {
    console.log(team);
    mySpinner(true);
    let url = `${base_url}team/${team}`;
    fetch(url)
        .then(response => {
            return response.json();
        }).then(json => {
            showPlayerInformation(json);
        }).catch(error => {
            console.error(error);
        })
}

const showTeamInfo = () => {
    let team = document.querySelector("#idSelect").value;
    if (team !== "") {
        showTeamDetailInformation(team);
    }
}
const showLabels = () => {
    let data = `<select class='form-control' id="idSelect" onchange=showTeamInfo()>`
    data += `<option value=''>Select Team</option>`;
    labels.forEach(ele => {
        data += `<option value='${ele}'>${ele}</option>`;
    })
    data += '</select>';
    mySpinner(false);
    document.querySelector("#idLabels").innerHTML = data;

}

const labelInfo = () => {
    mySpinner(true);
    fetch(`${base_url}team/labels`)
        .then(response => {
            return response.json();
        }).then(json => {
            labels = json.labels;
            showLabels();
        }).catch(error => {
            console.error(error);
        })
}
labelInfo();