let secNumber = parseInt(Math.random() * 20 + 1);
console.log(secNumber);
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};
document.querySelector(".check").addEventListener("click", function () {
  const number = Number(document.querySelector(".guess").value);
  console.log(number);
  if (!number) {
    displayMessage("⛔ No Number!");
  } else if (number === secNumber) {
    displayMessage("🎉 Correct Number");
    document.querySelector(".number").textContent = secNumber;
    document.querySelector(".number").style.width = "30rem";
    document.body.style.backgroundColor = "#60b347";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (number !== secNumber) {
    if (score > 1) {
      displayMessage(number > secNumber ? "📈 Too High" : "📉 Too Low");
      score--;
      displayScore(score);
    } else {
      displayMessage("💥 U LOST");
      displayScore(0);
    }
  }
});

document.querySelector(".btn.again").addEventListener("click", function () {
  score = 20;
  displayScore(score);
  secNumber = parseInt(Math.random() * 20 + 1);
  document.body.style.backgroundColor = "#222222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
});
