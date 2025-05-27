
function redirect() {
  window.location.href = "index.html";
}

let data = JSON.parse(localStorage.getItem("data")) || [];

let container = document.querySelector("#products_data");

append(data);

function append(data) {
  data.forEach(function(el, i) {
    let div = document.createElement("div");
      div.style.border = "2px solid red";
      div.style.textAlign = "center";
    let image = document.createElement("img");
      image.src = el.imageLink;
      image.style.width = "280px";
      image.style.height = "300px";
    let brand = document.createElement("h2");
      brand.innerText = el.brand;
    let name = document.createElement("h3");
      name.innerText = el.name;
    let price = document.createElement("h3");
      price.innerText = el.price;
    let btn = document.createElement("button");
      btn.innerText = "Remove Product";
      btn.style.marginBottom = "20px";
      btn.style.cursor = "pointer";
      btn.addEventListener("click", function(event){
        event.target.parentNode.remove();
        removeProduct(i);
    })
    div.append(image, name, brand, price, btn);
    container.append(div);
  })
}

function removeProduct(i) {
  data.splice(i,1);
  localStorage.setItem("data", JSON.stringify(data));
  window.location.reload();
  append(data);
}


if (typeof exports !== "undefined") {
  module.exports = {
    append, remove
  };
}