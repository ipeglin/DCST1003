// Array containing the legal arguments
statements = ["H", "U", "B"]

// Function running when button is pressed
function ioFunction() {
    // Storing the input statement and converting it to upper case
    let inputStatement = document.getElementById("inputField").value;
    inputStatement = inputStatement.toUpperCase()
    // alert(inputStatement);

    // Declaring the output string
    let outputString;

    // Checking if the input is one of the legal ones
    if (statements.indexOf(inputStatement) >= 0) {
        // Clearing the error message if there was a previous error
        document.getElementById("isError").innerHTML = "";
        document.getElementById("fillIn").innerHTML = "Du tipper at følgende resultater vil bli:";
        
        // Using switch statement to define the relevant output string
        switch(inputStatement) {
            case "B":
                outputString = "Borte";
                break;
            case "U":
                outputString = "Uavgjort";
                break;
            default:
                outputString = "Hjemme";
                break;
        }

        // Replaces text in div to output to user
        document.getElementById("outputData").innerHTML = outputString;
        
    }
    else {
        // Displaying error message to user if incorrect arguments have been stated
        document.getElementById("isError").innerHTML = "Du har gitt et ugyldig argument.";
        document.getElementById("outputData").innerHTML = "";
        document.getElementById("fillIn").innerHTML = "";

    }
}