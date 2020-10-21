
// Main function running onload
function bottleFunction() {
    // Total amount of bottles
    let numberOfBottles = 10;
    // Tracking how many bottles that has fallen
    let bottleNumber = 10;
    // Declaring the outputString
    let outputString = "";

    // Running function mainRef until all bottles has fallen
    while (numberOfBottles > 0) {
        // Appending string to outputString
        outputString += mainRef(bottleNumber);
        // Appending outputString to div element in HTML file
        document.getElementById("outputData").innerHTML = outputString;
        numberOfBottles--    
        bottleNumber--
    }
}

// Creating string with respect to how many bottles there are
function mainRef(nrBottles) {
    // Declaring string
    let string = "";

    // Logging to console for double check while developing the code
    console.log("Amount of bottles:  " + nrBottles + "  |   Bottles left: " + (nrBottles - 1));
    // Add string two times
    for (i = 0; i < 2; i++) {
        if (nrBottles != 1) {
            string += nrBottles + " green bottles, hanging on a wall,<br>";
        }
        else {
            string += nrBottles + " green bottle, hanging on a wall,<br>";
        }
    }

    // Add the following two lines
    if (nrBottles != 1 && ((nrBottles - 1) != 1) || (nrBottles - 1) == 0) {
        stringExtention = "If 1 green bottle were to accidentally fall<br> There'd be " + (nrBottles - 1) + " green bottles, hanging on the wall<br><br>";
    }
    else {
        stringExtention = "If 1 green bottle were to accidentally fall<br> There'd be " + (nrBottles - 1) + " green bottle, hanging on the wall<br><br>";
    }
    string = string + stringExtention;
    // Returns the string to bottleFunction()
    return string;
}