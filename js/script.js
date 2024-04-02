"use strict";

async function toggleVisibility(button, text) {
  if (button.src.endsWith("icon-plus.svg")) {
    button.src = "./assets/images/icon-minus.svg";
    text.classList.remove("invisible");
  } else {
    button.src = "./assets/images/icon-plus.svg";
    text.classList.add("invisible");
  }
}

function handleHeadingClick(heading, button, text) {
  heading.addEventListener("click", function () {
    toggleVisibility(button.querySelector("img"), text);
  });
}

const buttons = document.querySelectorAll(".button[data-target]");
const texts = document.querySelectorAll(".question p.invisible");
const headings = document.querySelectorAll("h2[data-target]");

buttons.forEach((button, index) => {
  button.addEventListener("click", function () {
    const targetIndex = parseInt(button.dataset.target) - 1;
    const text = document.querySelector(`.question${index + 1} p`);
    toggleVisibility(button.querySelector("img"), text);
  });
});

headings.forEach((heading, index) => {
  const button = document.querySelector(`.button[data-target="${index + 1}"]`);
  const text = document.querySelector(`.question${index + 1} p`);
  handleHeadingClick(heading, button, text);
});
