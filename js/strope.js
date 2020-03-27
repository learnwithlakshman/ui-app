function isPalindrome(str) {
    if (str.trim().length > 0) {
        if (str.length == 1) {
            return true;
        } else {
            for (let i = 0, j = str.length - 1; i <= j; i++, j--) {
                if (str[i] != str[j]) {
                    return false;
                }
            }
            return true;
        }
    }
    return false;
}

function validateEmail(email) {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mailformat))
        return true;
    return false
}

function printAllPossibleWord(str) {
    can
    nac
    anc
    nca

}

let idStr = document.querySelector("#idStr");
let res = document.querySelector("#result");
idStr.addEventListener('keyup', (event) => {
    let str = event.target.value;
    let data = ""
    if (event.key === "Enter") {
        if (isPalindrome(str.toLowerCase())) {
            data = `<div class='text-success'>Palindrome</div>`;
        } else {
            data = `<div class='text-danger'>Not a Palindrome</div>`;
        }
        res.innerHTML = data;

    }
    if (str.trim().length == 0) {
        res.innerHTML = ""
    }
})

let checkEmail = document.querySelector("#validateEmail");

checkEmail.addEventListener('keyup', (event) => {
    let res = document.querySelector("#emailRes")
    let email = event.target.value;
    let div = "";
    if (event.key === "Enter") {
        if (validateEmail(email))
            div = `<div class='text-success'>Valid Email</div>`;
        else
            div = `<div class='text-danger'>Not a Valid Email</div>`;
        res.innerHTML = div
    }

})