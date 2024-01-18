console.log("Script is working");

/*
Fetch the product data from "https://fakestoreapi.com/products" and log it to the console
Once you have all the data and can read it in console generate cards in the html that contain the data about the products
Every card should contain the id, title, price, description and image
The styling of the card is up to the student, what is mandatory is that all the above properties are displayed in the html
*/

const cardContainer = document.querySelector(".card-container");

const PRODUCTS_URL = "https://fakestoreapi.com/products";

function fetchProducts() {
  fetch(PRODUCTS_URL)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      generateProducts(cardContainer, data);
    });
}

fetchProducts();

function generateProducts(cardEl, productDetalis) {
  let productHTML = "";
  for (let product of productDetalis) {
    productHTML += `
    <div id="product-detalis">
    <h1>ID: ${product.id}, ${product.title}</h1>
    <p>${product.description}</p>
    <h5>Price: ${product.price}</h5>
    </div>`;
  }

  cardEl.innerHTML = productHTML;
}
