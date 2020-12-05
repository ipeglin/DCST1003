


function createTriangle() {

    // Defining several variables
    let length = document.getElementById("numberOfRows").value;
    let index = 1;
    let whichNumber = 1;
    let outputString = "";
    
    
    if (length <= 50) {
        while (index <= length){
            let turnsLeft = length - (length - index);
            for (i = 1; i <= (turnsLeft); i++) {
                outputString += i + " ";
            }
            outputString += "<br>";
            index++;
        }
    }
    else {
        outputString = "Er vi litt for ivrige kanskje?<br><i>NB! Prøv et litt mindre tall</i>";
    }
    

    document.getElementById("output").innerHTML = outputString;
    
}