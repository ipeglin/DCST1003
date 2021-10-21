
// a
let nameInput = prompt("Hva heter du?");
let favouriteColor = prompt("Hva er favorittfargen din?");

console.log(`Hei, ${nameInput}, liker du ${favouriteColor.toLowerCase()}-farge du?`);



// b
let firstName = prompt("Hva er fornavnet ditt?");
let middleName = prompt("Hva er mellomnavnet ditt?");
let lastName = prompt("Hva er etternavnet ditt?");

document.getElementById("output").innerText = `${firstName} ${middleName} ${lastName}`;



// c
document.getElementById("echo-input").oninput = () => {
    document.getElementById("echo-output").innerText = document.getElementById("echo-input").value;
}