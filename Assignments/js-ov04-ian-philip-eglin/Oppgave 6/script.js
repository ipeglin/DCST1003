

function addYears(age, index) {
    
    return age + index
}

function main() {

    name = document.getElementById("nameInput").value;
    age = parseInt(document.getElementById("ageInput").value);
    incIndex = parseInt(document.getElementById("increaseInput").value);

    ageInN = addYears(age, incIndex);

    document.getElementById("outputData").innerHTML = "Om " + incIndex + " år er " + name + " " + ageInN + " år gammel.";
}