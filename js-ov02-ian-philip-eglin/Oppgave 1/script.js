// Declaring a button variable taken from the HMTL file
var button = document.getElementById("submitButton");

// On button click a function will run
button.onclick = function() {
    // Assigning number from input to a variable
    var number = document.getElementById("numberInput").value
    // Logs the number to the console for double checking it's the right value    
    console.log(number);


    // Calculating new floating ints and floating numbers and saving them to variables
    var halfedNumber = number / 2;
    var doubledNumber = number * 2;
    var trippledNumber = number * 3;
    var squaredNumber = number ** 2;

    // Bug fixing --- When there is no input, the script won't use zero
    if(number != "") {
        // Appending the text and numbers to the divs in the HTML file
        document.getElementById("isError").innerHTML = "";
        document.getElementById("halfOfNumber").innerHTML = number + " / 2 = " + halfedNumber;
        document.getElementById("doubleOfNumber").innerHTML = number + " * 2 = " + doubledNumber;
        document.getElementById("trippleOfNumber").innerHTML = number + " * 3 = " + trippledNumber;
        document.getElementById("powerOfNumber").innerHTML = number + "^2 = " + squaredNumber;
    }
    else {
        // If there is no value in the input element there will show a notice
        document.getElementById("isError").innerHTML = "Du må legge inn ett tall i feltet";
    }
    
}