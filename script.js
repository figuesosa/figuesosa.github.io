"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const raccoonImg = document.querySelector(".raccoon-img");

const MAX_IMAGES = 6;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "TENEMOS UNA CITA PENDIENTE EL 15 PARA ALLA TE VOY";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "¿Estas segura?",
    "Porfavorcito amorcito",
    "No seas malucaaaaaa :c",
    "Si me decis que no, me tiro del puente de Danto (ahi no hay agua >:c)",
    "ME VOY A PONER A CHILLARRRRRR",
    "Te voy hacer brujeria para que me digas que si muejejejjeeje c:<",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  raccoonImg.src = `img/raccoon-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
