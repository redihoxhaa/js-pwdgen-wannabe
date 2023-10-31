"use strict";

const firstName = prompt("Scrivi il tuo nome:");
console.log(firstName);
const lastName = prompt("Scrivi il tuo cognome:");
console.log(lastName);
const favColor = prompt("Scrivi il tuo colore preferito:");
console.log(favColor);
const randomNum = Math.floor(Math.random() * 100);
console.log(randomNum);
let generatedPswd = firstName + lastName + favColor + randomNum;
console.log(generatedPswd);
let divPswd = document.getElementById("user-password");
divPswd.innerHTML = generatedPswd;




