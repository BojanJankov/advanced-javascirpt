console.log("Script is working");

const colorInput = document.querySelector("#color");
const fontSizeInput = document.querySelector("#fontSize");
const itemsInput = document.querySelector("#items");
const generateButton = document.querySelector("#button");
const list = document.querySelector(".list");

console.log(colorInput, fontSizeInput, itemsInput, generateButton);

generateButton.addEventListener("click", function () {
  list.innerHTML = "";
  list.style.color = colorInput.value;
  list.style.fontSize = `${fontSizeInput.value}px`;

  const inputsArray = inputs.split(",");

  let liHTML = "";
  for (let input of inputsArray) {
    liHTML += `<li>${input}</li>`;
  }

  list.innerHTML = liHTML;

  return list;
});
