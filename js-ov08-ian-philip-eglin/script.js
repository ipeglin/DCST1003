// Retrieve the needed HTML elements:
let colorSelection = document.getElementById('colorSelection');
let drawingBoard = document.getElementById('drawingBoard');
let clearButton = document.getElementById("clearButton");
let active = false;



// Associate color names to RGB values
let colors = {
    Red: 'rgb(255, 0, 0)',
    White: 'rgb(255, 255, 255)',
    Black: 'rgb(0, 0, 0)',
    Blue: "rgb(0, 0, 255)",
    Green: "rgb(0, 255, 0)"
};

// The drawingBoard squares will be stored in this table for later use:
let squares = [];


// Create the drawingBoard squares:
for (let i = 0; i < 600; i++) {
    // Create new drawingBoard square
    let square = document.createElement('div');
    
    square.style.height = "20px";
    square.style.width = "20px";
    square.style.float = 'left';
    square.style.backgroundColor = colors['White'];

    square.onmousedown = () => {
        active = true;
    }

    square.onmouseup = () => {
        active = false;
    }


    square.onmouseenter = (event) => {
        if (active) {
            // Set color of square to selected color
            square.style.backgroundColor = colors[colorSelection.value];
        }
        
    };

    // Add square as child to drawingBoard element
    drawingBoard.appendChild(square);
    // Add square to squares table
    squares.push(square);

}


clearButton.onclick = () => {
    console.log(squares.length);
    for (square of squares) {
        square.style.backgroundColor = colors["White"];
    }
}


fillButton.onclick = () => {
    for (square of squares) {
        square.style.backgroundColor = colors[colorSelection.value];
    }
}

