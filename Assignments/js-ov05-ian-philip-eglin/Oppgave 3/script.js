
let items = [];
let prices = [];
let turn = 0;

// Hente inn data

function main() {

    if (turn < 5) {
        let item = document.getElementById("itemInput").value;
        let price = parseInt(document.getElementById("priceInput").value);
        
        price = price || 0;

        appendToArrays(item, price, turn);

        items.sort();
        prices.sort();

        let output = "Varer og pris: <br><br>";

        for (let i = 0; i < items.length; i++) {
            output += items[i].toUpperCase() + ": " + prices[i] + " kr<br>";
         }

        output += "<br><br><b>Gjennomsnitt:</b> " + averagePrice();
        output += "<br><b>Sum:</b> " + sumPrice();

        output += "<br>Den billigste prisen er: " + prices[0] + " kr";
        output += "<br>Den høyeste prisen er: " + prices[prices.length-1] + " kr";




        document.getElementById("outputData").innerHTML = output;
    }
    else {

    }
    
    turn++;
}



// Sette inn data i array

function appendToArrays(item, price, index) {
    
    items[index] = item;
    prices[index] = price;

}

// Gjennomsnitt

function averagePrice() {
    let total = 0;
    for(let i = 0; i < prices.length; i++) {
        total += prices[i];
    }
    console.log(total + "/" + prices.length);
    let avg = total / prices.length;
    return avg + " kr";
}


function sumPrice() {
    let sum = 0;
    for (let i = 0; i < prices.length; i++) {
        sum += prices[i];
    }
    console.log(sum);
    return sum + " kr";
}
