
// Decalring global variables
let points = 0;
let running = true;
let resetButton = document.getElementById("resetButton");
let scores = [];

// Defining main function
function main() {

    points = 0;
    running = true;

    // Checking if the program is running
    console.log("Running state: " + running);


    // Display the amount of points the user has
    let pointsText = document.getElementById('pointsText');
    pointsText.innerHTML = "Points: " + points;


    // Defining the time the user has
    let timer = 14;  // Must be time -1
    
    
    // After (timer + 1) second(s) stop the program and display total score
    let interval = setInterval(() => {

        // Update timer 
        document.getElementById("timerOutput").innerHTML = "Timer: " + timer;
        timer--;

        // If timer hits 0 then...
        if (timer < 0) {
            
            // Stop timer
            clearInterval(interval);
            running = false;

            // Check if program has ended
            console.log("Running state: " + running);

            // Sorting array
            scores.push(points);
            scores.sort();

            // Printing the results to the user including their highscore
            if (points != 1) {
                document.getElementById("outputData").innerHTML = "<br><h1>You managed to find <b style='color:red'>" + points + "</b> buttons.<br><br>High Score: " + scores[scores.length - 1] + "!</h1>";    
            }
            else {
                document.getElementById("outputData").innerHTML = "<br><h1>You managed to find <b style='color:red'>" + points + "</b> button.<br><br>High Score: " + scores[scores.length - 1] + "!</h1>";    
            }

            // Double checking that the butten truly is hidden
            button.style.visibility = "hidden";
            resetButton.style.visibility = "visible";


        }
    }, 1000);

    
    // Running the function for updating position
    setButton();
}  


function setButton() {

    let button = document.getElementById('button');
    button.style.position = 'absolute';

    
    // Hide button
    button.style.visibility = 'hidden';
    
    
    // Move button to a random position
    button.style.left = Math.random() * 500 + 'px';
    button.style.top = Math.random() * 500 + 'px';
    
    
    // Show button when the mouse cursor is close to it
    window.onmousemove = (event) => {
    
        
        // Find the center of button
        let rect = button.getBoundingClientRect();
        let centerX = (rect.right + rect.left) / 2;
        let centerY = (rect.bottom + rect.top) / 2;


        // If the timer still is running when the button is pressed...
        button.onclick = () => {
            if (running) {
                points++;
                pointsText.innerHTML = "Points: " + points;
                console.log("Button pressed. Points: " + points)
                setButton();
            }
        }


        // Calculate distance between mouse cursor and center of button
        let distance = Math.sqrt(
            Math.pow(centerX - event.clientX, 2) + Math.pow(centerY - event.clientY, 2)
            );
        
        // When cursor is close enough and the timer is not done. Reveal the button
        if (distance < 100 && button.style.visibility == 'hidden' && running == true) {
            button.style.visibility = 'visible';
        }
        
    };
}   


// Upping the point counter for each time the button is pressed
function increasePoint() {
    points++;
    pointsText.innerHTML = "Points: " + points;
    setButton();
}

function reset() {
    resetButton.style.visibility = "hidden";
    document.getElementById("outputData").innerHTML = "";
    main();
}