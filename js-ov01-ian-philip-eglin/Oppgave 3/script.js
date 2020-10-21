// imports the input from the HTML file into a variable
var input = document.getElementById("inputField");

// Whenever a key is pressed the program will update itself
input.onkeyup = function() {
    // The string is updated to whatever is contained by the input element in the HTML file
    var inputString = document.getElementById("inputField").value;

    // Appends the output string to the <div> element on the website
    document.getElementById("nameOutput").innerHTML = inputString;
}