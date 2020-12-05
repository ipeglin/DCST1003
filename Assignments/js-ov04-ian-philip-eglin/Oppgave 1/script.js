

function isTeenager() {
    // Declaring age variable
    let age = document.getElementById("ageInput").value;
    // Checking if teenager
    if (age >= 13 && age <= 19) {
        // Changing text in div in HTML file
        return document.getElementById("output").innerHTML = "Du er tenåring";
    }
    else {
        return document.getElementById("output").innerHTML = "Du er ikke tenåring";
    }
}