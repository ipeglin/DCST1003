// Oppgave 1

// a
function OPG1a() {
    let numberLimit = document.getElementById("OPG1aInput").value;
    let Output = document.getElementById("OPG1aOutput");
    let sum = 0;

    // Checking if input is NaN
    if (isNaN(numberLimit)) {
        // Display error message
        Output.innerHTML = "<i style='color:red'>Invalid input</i>";
    }
    else {
        // Summing all numbers between 1 and n
        for (let i = 1; i <= numberLimit; i++) {
            sum += i;
        }
        // Display results
        Output.innerText = "Sum: " + sum;
    }
}

// b
function OPG1b() {
    let numberLimit = document.getElementById("OPG1bInput").value;
    let Output = document.getElementById("OPG1bOutput");
    let sum = 0;

    // Cheching if input is NaN
    if (isNaN(numberLimit)) {
        // Display error message
        Output.innerHTML = "<i style='color:red'>Invalid input</i>";
    }
    else {
        // Summing all numbers between 1 and n which also are divisable by 3 or 5
        for (let i = 0; i <= numberLimit; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                sum += i;
            }
            else {
                continue;
            }
        }
        // Display results
        Output.innerText = "Sum: " + sum;
    }
}

// c
let count = 0;
function OPG1cMain() {
    let button = document.getElementById("OPG1cSubmit");
    let guess = document.getElementById("OPG1cInput").value;

        // Cheching if input is NaN
    if (isNaN(guess)) {
        OPG1cResults("NaN");
    }
    else {
        // Run feedback function with the guessed number as argument
        OPG1cFeedback(guess);
        // Increment the counter
        count++;
    }
}

function OPG1cFeedback(guess) {
    let goal = 17;
    // Comparing the guess to the targeted number
    // Calling on results function with respective agruments
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
    // Determining output string depending on the parameters given
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

    // Append all characters from string to array in reversed order
    for (let character of string) {
        stringArr.unshift(character);
    }
    
    // Constructing new string which is a reverse of original input string
    for (let element of stringArr) {
        reverseString += element;
    }
    
    // Comparing the two strings
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


    let lastTwoDigits = "";
    // Setting the last two digits of input year
    lastTwoDigits += year[year.length - 2] + year[year.length - 1];

    // Cheching if year is a new century
    if (lastTwoDigits == "00") {
        // Checking if year is a leap year
        if (year % 400 == 0) {
            isLeapYear = true;
        }
    }
    else {
        // Checking if year is a leap year
        if (year % 4 == 0) {
            isLeapYear = true;
        }
    }

    // Cheching if year is NaN
    if (isNaN(year)) {
        output.innerHTML = "<i style='color:red'>Invalid input</i>";
    }
    // If not NaN. Checking if it is a leap year or not
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

// Setting interval to start when loading page
setInterval(() => {
    // Setting background color to black
    document.body.style.backgroundColor = 'rgb(' + x + "," + x + "," + x + ')';

    // Increase rgb value by 5 every interval iteration
    x += 5;

    // When background is completely white; do...
    if (x == 255) {
        // Setting new interval for numbers
        setInterval(() => {
            // Creating new div element
            let div = document.createElement("div");
            // Setting innerText to number value for interval iteration
            div.innerText = num;
            
            // Setting style for new div element
            div.style.position = "absolute";
            div.style.left = Math.floor(Math.random() * 100);
            div.style.top = 100 + Math.floor(Math.random() * 100);

            // Appending element to body
            document.body.appendChild(div);

            // Increment number for next iteration
            num++;
        }, 500); // Do every 0.5 seconds
    }
}, 20); // Do every 0.02 seconds


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