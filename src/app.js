import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  generateCard()
};

let btn = document.getElementById("change-card");

btn.addEventListener("click", function() {
  generateCard()
});

function generateCard(){
  const suits = ["♥", "♠", "♣", "♦"];
  const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

  const suitsRandom = suits[Math.floor(Math.random() * suits.length)];
  const valorRandom = values[Math.floor(Math.random() * values.length)];
  const card = document.getElementById("card");
  card.innerHTML = "";

  const upperIcon = document.createElement("div");
  const center = document.createElement("div");
  const bottomIcon = document.createElement("div")

  upperIcon.textContent = suitsRandom;
  center.textContent = valorRandom;
  bottomIcon.textContent = suitsRandom;

  upperIcon.className = "position-absolute top-0 start-0 p-2 fs-1";
  center.className = "fs-1 fw-bold position-absolute top-50 start-50 translate-middle";
  bottomIcon.className = "position-absolute bottom-0 end-0 p-2 fs-1";

  const color = (suitsRandom === "♥" || suitsRandom === "♦") ? "text-danger" : "text-dark";
  upperIcon.classList.add(color);
  center.classList.add(color);
  bottomIcon.classList.add(color);
  card.append(upperIcon, center, bottomIcon);
}
