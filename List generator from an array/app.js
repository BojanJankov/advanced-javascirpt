console.log("Script is working");

/*
Create an array of 5 names
Create an HTML page with:
A header
An empty unordered list
A button
When the button is clicked it should fill in the empty unordered list with the names of the arra
*/

const unorderedList = document.querySelector(".list");
const addButton = document.querySelector("#addButton");

const nameArray = ["Ivo", "Bojan", "Kiko", "Ana", "Mateja"];

function addNamesToList() {
  unorderedList.innerHTML = "";
  for (let i = 0; i < nameArray.length; i++) {
    unorderedList.innerHTML += `<li>${nameArray[i]}</li>`;
  }
}

addButton.addEventListener("click", addNamesToList);
