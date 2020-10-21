// Defining a variable "Button" and uses the input from button element the HTML file
var button = document.getElementById("nameButton");

// Defines a function that runs when the button is pressed
button.onclick = function() {
    // Collects all the different names and stores them as a string in a full name variable
    var fullName = document.getElementById("firstName").value + " " + document.getElementById("middleName").value + " " + document.getElementById("lastName").value;

    // Retrieves the <div> element in the HTML file and rewrites the content to the full name that is given by the user
    document.getElementById("fullNameOutput").innerHTML = fullName;
}