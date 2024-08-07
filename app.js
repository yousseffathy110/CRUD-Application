"use strict";
const title = document.getElementById("title"),
  price = document.getElementById("price"),
  taxes = document.getElementById("taxes"),
  ads = document.getElementById("ads"),
  discount = document.getElementById("discount"),
  total = document.querySelector(".total"),
  count = document.getElementById("count"),
  category = document.getElementById("category"),
  submit = document.getElementById("submit");

//calc the total price
const getTotalPrice = () => {
  if (price.value !== "") {
    let totalPrice =
      (+price.value + +ads.value + +taxes.value) * (1 - +discount.value / 100);
    total.textContent = `${Math.trunc(totalPrice)} LE`;
  } else total.innerHTML = "Total:";
};

// clear inputs
const clearInputs = () => {
  document.querySelectorAll("input").forEach((element) => {
    element.value = "";
  });
};

let dataProducts;

if (localStorage.product != null)
  dataProducts = JSON.parse(localStorage.product);
else dataProducts = [];

// add new product
const addProduct = () => {
  const newProduct = {
    title: title.value,
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discount: discount.value,
    total: total.textContent,
    count: count.value,
    category: category.value,
  };

  dataProducts.push(newProduct);
  localStorage.setItem("product", JSON.stringify(dataProducts));

  // clear inputs
  clearInputs();
};

submit.addEventListener("click", addProduct);
