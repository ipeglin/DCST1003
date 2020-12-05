

function callArray() {
    array = ["Hello", "World"];
    return array[(array.length-1)];
}

function printArray() {
    document.getElementById("output").innerHTML = "Det siste elementet er:  " + callArray();
}