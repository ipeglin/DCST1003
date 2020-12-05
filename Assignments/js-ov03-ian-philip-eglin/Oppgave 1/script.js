
function outputData() {
    let output = "";

    timesLooped = 0;
    number = 1;
    
    // As long as the code has been looped less than 7 times
    while (timesLooped < 7) {
        // Append the string with current number to output string
        output += "Jeg er tall nummer " + number + "<br>";

        // Increase the number for the next loop
        number++
        // Increase the amount of times looped
        timesLooped++
    }

    // Output the output string in the data div in the HTML file
    document.getElementById("data").innerHTML = output;

}

