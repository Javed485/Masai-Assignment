
function redirect() {
  window.location.href = "inventory.html";
}

// localStorage.removeItem("data");
document.querySelector("#product_form").addEventListener("submit", getFormData);
let addArr = JSON.parse(localStorage.getItem("data")) || [];

function getFormData(e){
  e.preventDefault();
    let product_brand = document.querySelector("#brand").value;
    let product_name = document.querySelector("#name").value;
    let product_price = document.querySelector("#price").value;
    let product_image = document.querySelector("#image").value;
  addData(product_name, product_brand, product_price, product_image)
}

function addData(name, brand, price, imageLink) {
  let productObj = {
    name,
    brand,
    price,
    imageLink
  }
  // console.log(productObj);
  addArr.push(productObj);
  localStorage.setItem("data", JSON.stringify(addArr));
  alert("Data Successfully Add.");
  document.getElementById("product_form").reset();
}

if (typeof exports !== "undefined") {
  module.exports = {
    addData,
    redirect,
  };
}