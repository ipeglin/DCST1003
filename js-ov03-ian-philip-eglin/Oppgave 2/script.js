
function outputData() {
    let output = "";

    // Declaring the starting number
    number = 12;
    
    // As long as the code has long as number is <= 98
    while (number <= 98) {
        // Append the string with current number to output string
        output += "Jeg er tall nummer " + number + "<br>";

        // Increase the number by 5 for the next loop
        number += 5
    }

    // Output the output string in the data div in the HTML file
    document.getElementById("data").innerHTML = output;

}

