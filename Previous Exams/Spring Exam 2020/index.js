// Oppgave 1


// a

// Adding up all interger between 1 and given number n
function sumWithLimiter() {
    let iterationLimit = document.getElementById("intStartInput").value;
    let sum = 0;

    // Checking if input is a number
    if (!isNaN(iterationLimit)) {
        // Flooring number down in case n is a floating number
        iterationLimit = Math.floor(iterationLimit);

        // Adding all integers from 1 to n
        for (let i = 0; i < iterationLimit; i++) {
            sum += i;
        }    
        // Display for user
        document.getElementById("OPG1aOutput").innerText = "Sum: " + sum;
    }
}


// b

// Adding all integers from 1 to n which are divisable by 3 or 5 
function sumWithModulo() {
    let iterationLimit = document.getElementById("intStartInput2").value;
    let sum = 0;

    // Checking if input is a number
    if (!isNaN(iterationLimit)) {
        // Flooring number down in case n is a floating number
        iterationLimit = Math.floor(iterationLimit);

        // Adding all integers from 1 to n if the meet requirements
        for (let i = 0; i < iterationLimit; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                sum += i;
            }
        }

        // Display for user
        document.getElementById("OPG1bOutput").innerText = "Sum: " + sum;
    }
}


// c

let guesses = 0;

function submitGuess() {
    let number = document.getElementById("numberGuess").value;
    let output = document.getElementById("OPG1cOutput");

    // Clearing div if input is empty for a cleaner look
    if (guesses == 0) {
        output.innerText = "";
    }

    // Increment amount of guesses
    guesses++;

    // Checking if input is a number
    if (!isNaN(number)) {
        // Checking if the number is correct
        if (checkNumber(number)) {
            output.innerText = "Gratulerer! Du brukte " + guesses + " forsøk";
            guesses = 0;
        }
    }
    else {
        output.innerText = "Invalid input";
    }
}

// Comparing guessed number to hard coded number goal
function checkNumber(num) {
    if (num == 15) {
        return true;
    }
    else {
        return false;
    }
}


// Oppgave 2


// a

function isPalindrome() {
    let word = document.getElementById("wordInput").value;
    let output = document.getElementById("OPG2aOutput");

    // Checking if the input is a string
    if (typeof (word) == "string") {
        let stringArray = [];
        let inverse = "";

        // Appending every letter in word to array in reversed order
        for (let element of word) {
            stringArray.unshift(element);
        }

        // Appending every letter of reversed array to the inverse string
        for (let element of stringArray) {
            inverse += element;
        }

        // Displaying result to user. If input is empty, make a clean sweep of div
        if (word.length > 0) {
            let bool = word == inverse ? "Ja" : "Nei";
            output.innerText = "Er '" + word + "' et palidrom: " + bool;
        }
        else {
            output.innerText = "";
        }
        
    }
}


// b

function checkLeapYear() {
    let year = document.getElementById("yearInput").value;
    let output = document.getElementById("OPG2bOutput");

    let lastTwoDigits = "";
    let isLeapYear = false;

    // Checking if input is a number
    if (!isNaN(year)) {
        // If year has two digits or more
        if (year >= 10 || year <= -10) {
            lastTwoDigits += year[year.length - 2] + year[year.length - 1]
        }

        // If the last two digits of a year is 00
        if (lastTwoDigits == "00") {
            // Check if it is a leap year
            if (year % 400 == 0) {
                isLeapYear = true;
            }
        }
        else {
            // If the year is not the start of a century. Check if it is a leap year
            if (year % 4 == 0) {
                isLeapYear = true;
            }
        }

        // Display to user if the year is a leap year or not. If input is empty, clean div
        if (isLeapYear) {
            output.innerText = year + " er et skuddår.";
        }
        else {
            output.innerText = year + " er IKKE et skuddår.";
        }
    }
}


// Oppgave 3


// RGB value
let x = 0;

// Number to increment
let iteration = 1;

// Set interval to run on load
let colorInterval = setInterval(() => {

    // Change the background color of the page to black
    document.body.style.backgroundColor = "rgb(" + x + "," + x + "," + x + ")";

    // Increment the RGB value by 5 every iteration
    x += 5;

    // When the page's background is white
    if (x >= 255) {
        // Stop the first interval
        clearInterval(colorInterval);

        // Set new interval for divs
        setInterval(() => {
            // Creating div element
            let div = document.createElement("div");
            
            // Setting content of div
            div.innerText = iteration;

            // Setting style for div
            div.style.position = "absolute";
            div.style.left = Math.floor(Math.random() * 300) + "px";
            div.style.top = 100 + Math.floor(Math.random() * 300) + "px";

            // Choosing a grey color for numbers so its will be easier to check the other assignments
            div.style.color = "rgb(175,175,175)"

            // Appending child div to body
            document.body.appendChild(div);

            // Incrementing iteration number for the next looparound
            iteration++;

        }, 500); // Do this twice every second
    }
}, 20); // Repeat every 20 milliseconds until background is white


// Oppgave 4

let v = [2, 4, 6];

// Multiplying every element with the index of itself
console.log("each element of v multiplied by its index: [" + v.map((element) => element * v.indexOf(element)) + "]");

// Multiplying the total sum of all elements in array by two
console.log("2 multiplied by the sum of v: " + (v.reduce((accu, element) => accu + element, 0) * 2));

// Checking if all the elements in the array are positive
console.log("all elements of v are positive numbers: ", v.every((element) => element > 0) ? "Yes" : "No");



let patients = [
    { name: "Ola", hasFever: false },
    { name: "Kari", hasFever: true },
    { name: "Knut", hasFever: true }
];

// Displaying the name of all patients with a fever
console.log("patients who have fever: [", patients.map((patient) => patient.hasFever ? patient.name : "").filter((name) => name != "") + "]");

// Displaying the amount of patients who havs a fever
console.log("Number of patrients with fever: ", (patients.map((patient) => patient.hasFever ? patient.name : "").filter((name) => name != "").length));

// Finding the first patient in the array who has a fever
console.log("First patient who has fever is the patients table: ", patients.map((patient) => patient.hasFever ? patient.name : "").filter((name) => name != "")[0]);

// Checking if the patient named Ola has a fever
console.log("Does Ola have fever: ", patients.find((patient) => patient.name == "Ola").hasFever ? "Yes" : "No");