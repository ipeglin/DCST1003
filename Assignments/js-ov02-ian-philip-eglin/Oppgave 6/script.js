// Function that runs when button is pressed
function calculate() {

    // Importing the values of the age and distance
    let age = document.getElementById("ageInput").value;
    let distance = document.getElementById("distInput").value;

    // Checking if the input is a realistic number and then changing the type of the variable
    if(age > -10000 && age < 10000) {
        age = Number(age);
    }
    if(distance > -10000 && distance < 10000) {
        distance = Number(distance);
    }
    
    // Defining the distance price per km and declaring the discount variable
    let discount;
    const distPrice = 3.52;

    // Calculating the discount based on the age of the user
    if(age >= 12 && age <= 67) {
        discount = 0;
    }
    else if(age > 67) {
        discount = 0.2;
    }
    else {
        discount = 0.5;
    }

    // Calculating the price before and after the discount
    let priceBeforeDiscount = (distance * distPrice);
    let price = priceBeforeDiscount - (discount * priceBeforeDiscount);

    // Printing the ticket price to the user
    document.getElementById("priceOutput").innerHTML = "Billetten koster: " + price + "kr";
}