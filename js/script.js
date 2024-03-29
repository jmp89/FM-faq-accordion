"use strict";

const buttonShowText1 = document.querySelector(".button1 img");
const buttonShowText2 = document.querySelector(".button2 img");
const buttonShowText3 = document.querySelector(".button3 img");
const buttonShowText4 = document.querySelector(".button4 img");
const text1 = document.querySelector(".question1 p");
const text2 = document.querySelector(".question2 p");
const text3 = document.querySelector(".question3 p");
const text4 = document.querySelector(".question4 p");

buttonShowText1.addEventListener("click", function () {
  if (buttonShowText1.src.endsWith("icon-plus.svg")) {
    buttonShowText1.src = "../assets/images/icon-minus.svg";
    text1.classList.remove("invisible");
  } else {
    buttonShowText1.src = "../assets/images/icon-plus.svg";
    text1.classList.add("invisible");
  }
});

buttonShowText2.addEventListener("click", function () {
  if (buttonShowText2.src.endsWith("icon-plus.svg")) {
    buttonShowText2.src = "../assets/images/icon-minus.svg";
    text2.classList.remove("invisible");
  } else {
    buttonShowText2.src = "../assets/images/icon-plus.svg";
    text2.classList.add("invisible");
  }
});

buttonShowText3.addEventListener("click", function () {
  if (buttonShowText3.src.endsWith("icon-plus.svg")) {
    buttonShowText3.src = "../assets/images/icon-minus.svg";
    text3.classList.remove("invisible");
  } else {
    buttonShowText3.src = "../assets/images/icon-plus.svg";
    text3.classList.add("invisible");
  }
});

buttonShowText4.addEventListener("click", function () {
  if (buttonShowText4.src.endsWith("icon-plus.svg")) {
    buttonShowText4.src = "../assets/images/icon-minus.svg";
    text4.classList.remove("invisible");
  } else {
    buttonShowText4.src = "../assets/images/icon-plus.svg";
    text4.classList.add("invisible");
  }
});
