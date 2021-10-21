
// a
let nameInput: string = prompt("Hva heter du?");
let favouriteColor: string = prompt("Hva er favorittfargen din?");

console.log(`Hei, ${nameInput}, liker du ${favouriteColor.toLowerCase()}-farge du?`);



// b
let firstName: string = prompt("Hva er fornavnet ditt?");
let middleName: string = prompt("Hva er mellomnavnet ditt?");
let lastName: string = prompt("Hva er etternavnet ditt?");

document.getElementById("output").innerText = `${firstName} ${middleName} ${lastName}`;



// c
document.getElementById("echo-input").oninput = () => {
    document.getElementById("echo-output").innerText = document.getElementById("echo-input").value;
}