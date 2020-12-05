

function findLargest() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let largestNumber = "";


    if (num1 > num2) {
        largestNumber = Number(num1);
    }
    else if (num2 > num1) {
        largestNumber = Number(num2);
    }
    else {
        largestNumber = "<i>Tallene er like store</i>"
    }

    document.getElementById("output").innerHTML = "Det største tallet er:  " + largestNumber;
}