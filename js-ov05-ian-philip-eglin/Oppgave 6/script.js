

function appendToArray(startNumber, endNumber) {
    globalArray = [];
    console.clear()
    for (let i = startNumber; i <= endNumber; i++) {
        let coloumn = [];
        for (let l = startNumber; l <= endNumber; l++) {
            coloumn.push(i + l);
        }
        globalArray.push(coloumn);
    }

    return globalArray;
}




// Display all numbers in table

function main() {
    let startNumber = 1;
    let endNumber = document.getElementById("rangeInput").value;
    document.getElementById("rangeIndex").innerHTML = endNumber;

    console.log(appendToArray(startNumber, endNumber));
    createTable(appendToArray(startNumber, endNumber));

}



function createTable(array) {
    thisArray = array;
    let start = 0;
    let index = start + 1;
    let end = (thisArray.length - 1);
   
    let output = "<table style='width: 500px'>";

    output += "<tr>" + "<td id='divIndication'>+</td>";
    for (let i = start; i <= end; i++) {
        output += "<td>" + (i + 1) + "</td>";
    }

    for (let i = start; i <= end; i++) {
        output += "<tr>" + "<td>" + index + "</td>";

        for (let l = start; l <= end; l++) {
            output += "<td>" + thisArray[i][l].toFixed(0) + "</td>";
        }
        index++;    
        output += "</tr>";
    }

    output += "</table>";

    document.getElementById("outputData").innerHTML = output;
}