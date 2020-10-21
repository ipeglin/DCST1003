function tableGenerator() {

    let i, l, product;
    let output = "<table style='width: 500px'>";

    numberOfRows = 19;
    numberOfColoums = 19;
    index = 10;

    output += "<tr>" + "<td id='multiIndication'>X</td>";
    for (i = 10; i <= 19; i++) {
        output += "<td>" + i + "</td>";
    }


    for (i = 10; i <= numberOfRows; i++) {

        output += "<tr>" + "<td>" + index + "</td>";

        for (l = 10; l <= numberOfColoums; l++) {
            product = i * l;
            output += "<td>" + product + "</td>";
        }
        index++;
        output += "</tr>";
    }

    output += "</table>"

    document.getElementById("output").innerHTML = output;
    document.getElementById("multiIndication").style.textAlign = "center";
    
    
}