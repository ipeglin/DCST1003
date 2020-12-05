// A function that runs whenever the button is pressed
function ageFunction() {
    // Storing the value of the age in a variable
    var age = document.getElementById("ageInput").value;
    // alert(age);

    // Declaring the output variable
    var Output;

    // Checking if the person is retired, an adult or a child
    if(age >= 18 && age > 67) {
        Output = "Du er myndig. Du er dessuten pensjonist.";
    }
    else if(age >= 18 && age <= 67) {
        Output = "Du er myndig.";
    }
    else {
        Output = "Du er ikke myndig enda.";
    }

    // Outputs the respective string for each of the outcomes
    document.getElementById("ageOutput").innerHTML = Output;

}