console.log("Script is working");

/*
Movies renting App

Create a movie renting app

There should be an array of movie names
There should be an input and a search button
When the person enters a name of a movie it should search the array
If the name exists it should show an H1 element that says: "The movie can be rented" in green text
If the name does not exist it should show an H1 element that says: "The movie can't be rented" in red text
The input should not be case sensitive ( it should find the movie regardless of capital or small letters )
*/

const searchInput = document.querySelector("#movieSearch");
const searchButton = document.querySelector("#searchButton");
const answerContainer = document.querySelector(".answerContainer");

// console.log(searchButton, searchInput);

// Creating a array with elements as movies

const movies = [
  "Oppenhaimer",
  "Night swim",
  "Hungar Games",
  "Fast and Furious",
  "Mission Impossible",
  "Barbie",
  "Lift",
  "John Wick",
];

// console.log(moviesArray);

// Creating a function with event listener that on click will check if input movie name is in array with for loop, and will set up a true move exists and if is true will displey with green color, else will displey with red color on html

searchButton.addEventListener("click", function () {
  const searchValue = document.querySelector("#movieSearch").value;
  const container = document.querySelector(".answerContainer");
  let movie = searchValue;
  let movieExists = false;

  for (let i = 0; i < movies.length; i++) {
    if (movies[i] === movie) {
      movieExists = true;
    }
  }
  container.innerHTML = "";
  if (movieExists) {
    container.style.color = "green";
    container.innerHTML += `<h1>The movie can be rented.</h1>`;
  } else {
    container.style.color = "red";
    container.innerHTML += `<h1>The movie can't be rented.</h1>`;
  }
});
