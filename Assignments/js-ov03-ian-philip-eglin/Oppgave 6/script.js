

// Declaring global varible for amount of tries
let amountOfTries = 0;
let tooManyTries = false;

// Function running
function passwordCheck() {
    // Declaring all inputs from HTML file
    let username = document.getElementById("usernameInput").value;
    let password = document.getElementById("passwordInput").value;
    
    // Declaring output string
    let outputString = "";
    
    // Creating objects with correct usernames and passwords respectively
    validUsers = ["User1", "User2", "User3"];
    validPasswords = ["Pass1", "Pass2", "Pass3"];

    // Stating if the loging information is correct or not
    isCorrectLogin = false;

    // Checking if the username and its respective password is correct
    if (username == validUsers[0] && password == validPasswords[0]) {
        isCorrectLogin = true;
    }
    else if (username == validUsers[1] && password == validPasswords[1]) {
        isCorrectLogin = true;
    }
    else if (username == validUsers[2] && password == validPasswords[2]) {
        isCorrectLogin = true;
    }
    else {
        isCorrectLogin = false;

        // Increasing the count of how many tries
        amountOfTries++;
        if (amountOfTries >= 3) {
            //Sets the outputStrin to an error message
        outputString = "<h3><i>Error! You have tried too many times</i></h3>";
        tooManyTries = true;
        // Disabling all the input elements and the button so no further inputs can be made
        document.getElementById("usernameInput").disabled = true;
        document.getElementById("passwordInput").disabled = true;
        document.getElementById("submit").disabled = true;
        }
    }


    // Checking if login information is correct and within 3 tries
    if (isCorrectLogin == true && amountOfTries <= 3) {
        outputString = "<h3><i>Login Successfull!</i></h3>";
        amountOfTries = 0;
    }
    // Checking if login information is incorrect and within 3 tries
    else if(isCorrectLogin == false && tooManyTries != true){
        outputString = "<h3><i>Error! Username or Password is incorrect</i></h3>";
    }

    // Replacing the text in outputData div in HTML file with outputString
    document.getElementById("outputData").innerHTML = outputString;

}

