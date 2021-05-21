"use strict";
const againBtn = document.querySelector(".againBtn");
const checkBtn = document.querySelector(".checkBtn");
const inputField = document.querySelector(".inputNumber");
const questionMark = document.querySelector(".questionMark");
const startGuess = document.querySelector(".startGuess");
const scoreText = document.querySelector(".score");
const highscoreText = document.querySelector(".highscore");

let randomNumber = Math.trunc(Math.random() * 20 + 1);
// console.log(randomNumber);
let highScore = 0;
let score = 20;

const display = function () {
  let inputValue = Number(inputField.value);
  if (inputValue === 0 || inputValue < 0 || inputValue === "") {
    startGuess.textContent = "Invalid Input";
    inputField.value = "";
    questionMark.textContent = "?";
    document.body.style.background = "#bdc3c7";
    checkBtn.style.color = "#fff";
    questionMark.style.width = "50px";
  } else if (inputValue === randomNumber) {
    if (score < 20) {
      score++;
    } else {
      score = 20;
    }
    if (score > highScore) {
      highScore = score;
      highscoreText.textContent = highScore;
    }
    questionMark.textContent = randomNumber;
    scoreText.textContent = score;
    startGuess.textContent = "Correct";
    document.body.style.background = "#2ecc71";
    checkBtn.style.color = "#2ecc71";
    inputField.value = "";
    questionMark.style.width = "100px";
    randomNumber = Math.trunc(Math.random() * 20 + 1);
  } else if (inputValue > randomNumber) {
    if (score > 0) {
      score--;
    } else {
      score = 0;
    }
    scoreText.textContent = score;
    startGuess.textContent = "Too high";
    document.body.style.background = "#bdc3c7";
    questionMark.textContent = "?";
    checkBtn.style.color = "#fff";
    questionMark.style.width = "50px";
  } else if (inputValue < randomNumber) {
    if (score > 0) {
      score--;
    } else {
      score = 0;
    }
    scoreText.textContent = score;
    startGuess.textContent = "Too Low";
    document.body.style.background = "#bdc3c7";
    questionMark.textContent = "?";
    checkBtn.style.color = "#fff";
    questionMark.style.width = "50px";
  }
};

checkBtn.addEventListener("click", display);
againBtn.addEventListener("click", () => {
  scoreText.textContent = 20;
  document.body.style.background = "#bdc3c7";
  questionMark.textContent = "?";
  startGuess.textContent = "Start Guessing...";
  inputField.value = "";
  checkBtn.style.color = "#fff";
  questionMark.style.width = "50px";
});
