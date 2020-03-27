const sdigits = document.querySelector("#sdigits");
const reverse = document.querySelector("#reverse");
const palindrome = document.querySelector("#palindrome");
const biggest = document.querySelector("#btnBiggest");
const primes = document.querySelector("#btnPrime");

const sumOfDigits = (num) => {
    let s = 0;
    while (num != 0) {
        s += (num % 10);
        num = Number.parseInt(num / 10);
    }
    return s;
}
const reverseOfNumber = (num) => {
    let rev = 0;
    while (num != 0) {
        rev = rev * 10 + (num % 10);
        num = Number.parseInt(num / 10);
    }
    return rev;
}
const checkPalindrome = (num) => {
    return num == reverseOfNumber(num);
}

sdigits.addEventListener('click', (event) => {
    let num = Number.parseInt(document.querySelector("#num").value);
    let res = sumOfDigits(num);
    document.querySelector("#result").innerHTML = `<div class='text-primary'> Digits sum of ${num} is :${res}`;
})

reverse.addEventListener('click', (event) => {
    let num = Number.parseInt(document.querySelector("#num").value);
    let res = reverseOfNumber(num);
    document.querySelector("#result").innerHTML = `<div class='text-primary'> Reverse of ${num} is :${res}`;
})

palindrome.addEventListener('click', (event) => {
    let num = Number.parseInt(document.querySelector("#num").value);
    let res = checkPalindrome(num);
    let str = "";
    if (res) {
        str = `<div class='text-primary'> ${num} is a Palindrome`;
    }
    else {
        str = `<div class='text-danger'> ${num} is not a Palindrome`;
    }
    document.querySelector("#result").innerHTML = str;
})

biggest.addEventListener('click', (event) => {
    //debugger
    let nums = document.querySelector("#nums").value;
    let numsArr = nums.split(",");
    numsArr.sort(function (a, b) { return b - a }); // sorting in reverse order
    let biggest = numsArr[0];
    let res = "";
    res = `<div class='text-primary'> ${biggest} is biggest number. </div>`
    document.querySelector("#biggestresult").innerHTML = res;
})


const isPrime = (num) => {
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0)
            return false;
    }
    return true;
}

primes.addEventListener('click', (event) => {
    let range = Number.parseInt(document.querySelector("#range").value);
    let prime = 2;
    let primes = "";
    while (range > 0) {
        if (isPrime(prime)) {
            primes += prime + " ";
            range--;
        }
        prime++;
    }
    if (primes.length <= 0) {
        primes = "No primes in given range!"
    }
    let div = `<div class='text-primary'> Prime numbers : ${primes}  </div>`
    document.querySelector("#primeresult").innerHTML = div;
})



