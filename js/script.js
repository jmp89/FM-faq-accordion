"use strict";

function toggleVisibility(button, text) {
  if (button.src.endsWith("icon-plus.svg")) {
    button.src = "./assets/images/icon-minus.svg";
    text.classList.remove("invisible");
  } else {
    button.src = "./assets/images/icon-plus.svg";
    text.classList.add("invisible");
  }
}

const buttons = [
  document.querySelector(".button1 img"),
  document.querySelector(".button2 img"),
  document.querySelector(".button3 img"),
  document.querySelector(".button4 img"),
];

const texts = [
  document.querySelector(".question1 p"),
  document.querySelector(".question2 p"),
  document.querySelector(".question3 p"),
  document.querySelector(".question4 p"),
];

buttons.forEach((button, index) => {
  button.addEventListener("click", function () {
    toggleVisibility(button, texts[index]);
  });
});
