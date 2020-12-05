
let turns = 0;
let itemArray = [];


function appendToArray() {
    if (turns < 5) {
        let item = document.getElementById("itemInput").value;
        itemArray[turns] = item;
    }
    else {
    
    }

    let output = "Varene du har lagt til er: <br><br>";

    for (let i = 0; i < itemArray.length; i++) {
        output += itemArray[i] + "<br>";
        document.getElementById("outputData").innerHTML = output;
    }

    

    turns++;
}