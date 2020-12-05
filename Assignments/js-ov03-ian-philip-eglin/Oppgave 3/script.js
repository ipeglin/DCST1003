function calculate() {

    // Defining the start and stop parameter
    let start = document.getElementById("startNum").value;
    let stop = document.getElementById("stopNum").value;

    // Defining an output string
    let outputString = "";

    // Logging to console to double check if correct values
    console.log("Start: " + start);
    console.log("Stop: " + stop);

    // Calculating how many times to loop
    let turns = stop - start;
    // Logging to console to double check values
    console.log("Total turns: " + turns);

    // Loop that appends the new number to output string
    while (turns >= 0) {
        // Appending to output string
        outputString += start + " ";

        // Increases number by 1
        start++

        // Decreases turn limit by 1
        turns--
    }

    // Writing data to the outputData div in HTML file
    document.getElementById("outputData").innerHTML = outputString;
}