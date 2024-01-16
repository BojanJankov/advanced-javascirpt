console.log("Script is working");

const colorInput = document.querySelector("#color");
const fontSizeInput = document.querySelector("#font-size");
const textInput = document.querySelector("#text");
const generateButton = document.querySelector("#button");
const generateText = document.querySelector(".genrate-text");

// console.log(colorInput, fontSizeInput, textInput, submitButton);

generateButton.addEventListener("click", function generateH1() {
  let textValue = document.querySelector("#text").value;
  let generateTextValue = document.querySelector(".genrate-text").value;
  let colorValue = document.querySelector("#color").value;
  let fontSizeValue = document.querySelector("#font-size").value;

  generateText.innerHTML = "";
  generateText.innerHTML += `<h1> ${textValue}
    </h1>`;

  generateText.style.color = colorValue;
  generateText.style.fontSize = `${fontSizeValue}px`;

  return generateText.innerHTML;
});
