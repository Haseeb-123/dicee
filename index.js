let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img1").src = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img2").src = "images/dice" + randomNumber2 + ".png";

let player1 = "Player 1";
let player2 = "Player 2";
let winnerText;

if (randomNumber1 > randomNumber2) {
    winnerText = player1 + " wins!";
  } else if (randomNumber1 < randomNumber2) {
    winnerText = player2 + " wins!";
  } else {
    winnerText = "It's a draw!";
  }
  
  document.querySelector("h1").textContent = winnerText;









