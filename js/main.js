let sum = document.querySelector("#sum");
let sub = document.querySelector("#sub");
let mul = document.querySelector("#mul");
let calculateEmi = document.querySelector("#calculateEMI");

function getResult(ope) {
    let num1 = Number(document.querySelector("#num1").value);
    let num2 = Number(document.querySelector("#num2").value);
    if (ope === "+") {
        return `${num1} ${ope} ${num2} is ${num1 + num2}`;
    } else if (ope === "-") {
        return `${num1} ${ope} ${num2} is ${num1 - num2}`;
    } else {
        return `${num1} ${ope} ${num2} is ${num1 * num2}`;
    }

}
sum.addEventListener('click', (event) => {
    event.preventDefault();
    let res = getResult("+")
    document.querySelector("#result").value = res;
})

sub.addEventListener('click', (event) => {
    event.preventDefault();
    let res = getResult("-")
    document.querySelector("#result").value = res;

})

mul.addEventListener('click', (event) => {
    event.preventDefault();
    let res = getResult("*")
    document.querySelector("#result").value = res;

})


function getRes(rate, time) {
    return Math.pow(rate, time);
}


calculateEmi.addEventListener('click', (event) => {
    event.preventDefault();
    let amount = Number(document.querySelector("#amount").value);
    let time = Number(document.querySelector("#time").value);
    let rate = Number(document.querySelector("#rate").value);

    rate = (rate / (12 * 100));

    // formula:  EMI = amount*rate*(1+rate)^time/( ( (1+rate)^time) -1 ) 

    let v = getRes(rate + 1, time);

    let emi = (amount * (rate * v)) / (v - 1)

    document.querySelector("#emiResult").value = `Your EMI is ${emi.toFixed(2)}`;
})


function convertTo() {
    let time = Number.parseFloat(document.querySelector("#timeinms").value);
    let choice = document.querySelector("#choice").value;
    let res = 0;
    if (choice === 'sec') {

        res = time / 1000;

    } else if (choice === 'min') {

        res = time / 60000;

    } else if (choice === 'hrs') {

        res = (time / (1000 * 60 * 60)).toFixed(5);

    }
    document.querySelector("#convRes").value = res;
}

