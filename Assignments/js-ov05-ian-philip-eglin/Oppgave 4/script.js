

// Global arrays
let items = ["coca cola", "pepsi max", "redbull", "monster", "kaffe"];
let prices = [22.90, 21.90, 20.90, 25.90, 17];


// Searchinput

function itemSearch() {

    let item = String(document.getElementById("itemName").value);
    let output = "<br><br>";
    
    if (items.indexOf(item.toLowerCase()) == -1) {
        console.log("You searched for " + item.toUpperCase() + ", but this item doesn't exist");    
        output += "Dette er ikke en gyldig vare..."
    }
    else {
        console.log(item.toUpperCase() + " does exist");
        let itemPrice = findPrice(findItemIndex(item));
        output += "Varen med navn <i>" + item.toUpperCase() + "</t> koster " + itemPrice + " kroner.";
    }
    
    document.getElementById("outputData").innerHTML = output;
}


// Find index

function findItemIndex(itemName) {
    let itemIndex = items.indexOf(itemName);
    console.log("Item index is: " + itemIndex);
    return itemIndex;
}


function findPrice(itemIndex) {
    let price = prices[itemIndex];
    console.log("The price of item #" + itemIndex + " is " + price);
    return price;
}