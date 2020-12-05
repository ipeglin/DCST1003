// Oppgave 1

// a
function OPG1a() {
    let numberLimit = document.getElementById("OPG1aInput").value;
    let Output = document.getElementById("OPG1aOutput");
    let sum = 0;
    if (isNaN(numberLimit)) {
        Output.innerHTML = "<i style='color:red'>Invalid input</i>";
    }
    else {
        for (let i = 1; i <= numberLimit; i++) {
            sum += i;
        }
        Output.innerText = "Sum: " + sum;
    }
}

// b
function OPG1b() {
    let numberLimit = document.getElementById("OPG1bInput").value;
    let Output = document.getElementById("OPG1bOutput");
    let sum = 0;
    if (isNaN(numberLimit)) {
        Output.innerHTML = "<i style='color:red'>Invalid input</i>";
    }
    else {
        for (let i = 0; i <= numberLimit; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                sum += i;
            }
            else {
                continue;
            }
        }
        Output.innerText = "Sum: " + sum;
    }
}

// c
let count = 0;
function OPG1cMain() {
    let button = document.getElementById("OPG1cSubmit");
    let guess = document.getElementById("OPG1cInput").value;
    if (isNaN(guess)) {
        OPG1cResults("NaN");
    }
    else {
        OPG1cFeedback(guess);
        count++;
    }
}

function OPG1cFeedback(guess) {
    let goal = 17;
    if (guess == goal) {
        OPG1cResults("eq");
    }
    else if (guess > goal) {
        OPG1cResults("gt");
    }
    else {
        OPG1cResults("lt");
    }

}

function OPG1cResults(arg) {
    let output = document.getElementById("OPG1cOutput");
    switch (arg) {
        case "eq":
            output.innerText = "Congratulations! You guessed " + count + " times!";
            break;
        case "gt":
            output.innerText = "Your guess is greater than the secret number";
            break;
        case "lt":
            output.innerText = "Your guess is less than the secret number";
            break;
        default:
            output.innerHTML = "<i style='color:red'>Invalid input</i>";
    }
}


// Oppgave 2

// a

function OPG2a() {
    let string = document.getElementById("OPG2aInput").value;
    let output = document.getElementById("OPG2aOutput");
    let stringArr = [];
    let reverseString = "";
    for (let character of string) {
        stringArr.unshift(character);
    }
    for (let element of stringArr) {
        reverseString += element;
    }
    console.log("Input: " + string);
    console.log("Reversed: " + reverseString);
    if (string == reverseString && string != "") {
        output.innerText = string + " er et palindrom";
    }
    else {
        output.innerText = string + " er IKKE et palindrom";
    }
}

// b

function OPG2b() {
    let isLeapYear = false;
    let year = document.getElementById("OPG2bInput").value;
    let output = document.getElementById("OPG2bOutput");
    // year = String(year);
    let lastTwoDigits = "";
    lastTwoDigits += year[year.length - 2] + year[year.length - 1];
    if (lastTwoDigits == "00") {
        if (year % 400 == 0) {
            isLeapYear = true;
        }
    }
    else {
        if (year % 4 == 0) {
            isLeapYear = true;
        }
    }
    if (isNaN(year)) {
        output.innerHTML = "<i style='color:red'>Invalid input</i>";
    }
    else if (isLeapYear) {
        output.innerText = year + " er et skuddår";
    }
    else {
        output.innerText = year + " er IKKE et skuddår";
    }
}

// Oppgave 3

let x = 0;
let num = 1;
setInterval(() => {
    document.body.style.backgroundColor = 'rgb(' + x + "," + x + "," + x + ')';
    x += 5;
    if (x == 255) {
        setInterval(() => {
            let div = document.createElement("div");
            div.innerText = num;
            div.style.position = "absolute";
            div.style.left = Math.floor(Math.random() * 100);
            div.style.top = 100 + Math.floor(Math.random() * 100);
            document.body.appendChild(div);
            num++;
        }, 500);
    }
}, 20);


// Oppgave 4

let v = [2, 4, 6];

// a
console.log("each element of v multiplied by its index: [" + v.map((element) => element * v.indexOf(element)) + "]");

// b
console.log("2 multiplied by the sum of v: " + (v.reduce((accu, element) => accu + element, 0)) * 2);

// c
v.every((element) => element > 0) ? console.log("all elements of v are positive numbers: yes") : console.log("all elements of v are positive numbers: no")

// d

let patients = [
    { name: "Ola", hasFever: false },
    { name: "Kari", hasFever: true },
    { name: "Knut", hasFever: true }
];

console.log("patrients who have fever: [", patients.map((patient) => patient.hasFever ? patient.name : null).filter((patient) => patient != null), "]");

// e
console.log("Number of patients with fever: ", patients.map((patient) => patient.hasFever).filter((bool) => bool).length);

// f
console.log("First patient who has fever in the patients table: ", patients.map((patient) => patient.hasFever ? patient.name : null).filter((bool) => bool != null)[0]);

// g
console.log("Does Ola have fever: ", patients.find((patient) => patient.name == "Ola").hasFever ? "Yes" : "No");