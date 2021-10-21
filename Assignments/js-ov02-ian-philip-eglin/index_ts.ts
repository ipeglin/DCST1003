
// a
document.getElementById("opg1-submit").onclick = () => {
    let number: number = document.getElementById("number-input").value;
    document.getElementById("opg1-output").innerText = `Halvparten: ${number / 2}\nDobbelte: ${number * 2}\nTredobbelte: ${number * 3}\nKvadrert: ${number ** 2}`;
}



// b
document.getElementById("age-input").oninput = () => {
    let userAge: number = document.getElementById("age-input").value;
    let outputString: string = "";

    if (userAge > 67) {
        outputString = "Du er myndig. Du er dessuten pensjonist";
    } else if (userAge >= 18) {
        outputString = "Du er myndig";
    // } else {
        outputString = "Du er ikke myndig enda";
    }

    document.getElementById("opg2-output").innerText = outputString;
}



// c
document.getElementById("bet-input").oninput = () => {
    let bet: string = document.getElementById("bet-input").value;
    let outputString: string = "";
    
    if (bet == "H") {
        outputString = "Hjemme";
    } else if (bet == "U") {
        outputString = "Uavgjort";
    } else {
        outputString = "Borte";
    }

    document.getElementById("opg3-output").innerText = outputString;
}



// d
document.getElementById("bet-input-2").oninput = () => {
    let bet: string = document.getElementById("bet-input-2").value;
    let outputString: string = "";
    
    switch (bet) {
        case "H":
            outputString = "Hjemme";
            break;
        case "U":
            outputString = "Uavgjort";
            break;
        case "B":
            outputString = "Borte";
            break;
        default:
            outputString = "Dette er ikke en gyldig gjetning";
            break;
    }

    document.getElementById("opg4-output").innerText = outputString;
}



// e
document.getElementById("bet-input-3").oninput = () => {
    let bet: string = document.getElementById("bet-input-3").value.toUpperCase();
    let outputString: string = "";
    
    switch (bet) {
        case "H":
            outputString = "Hjemme";
            break;
        case "U":
            outputString = "Uavgjort";
            break;
        case "B":
            outputString = "Borte";
            break;
        default:
            outputString = "Dette er ikke en gyldig gjetning";
            break;
    }

    document.getElementById("opg5-output").innerText = outputString;
}



// f
document.getElementById("opg6-submit").onclick = () => {
    let userAge: number = document.getElementById("age-input-2").value;
    let travelDistance: string = document.getElementById("distance-input").value;

    let priceScaling: number = 1;

    if (userAge > 67) {
        priceScaling = 0.2;
    } else if (userAge >= 12) {
        priceScaling = 0.5;
    }

    document.getElementById("opg6-output").innerText = `Reisen kommer til å koste: ${priceScaling * travelDistance * 3.52}kr.`;
}