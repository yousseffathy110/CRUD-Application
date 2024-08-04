// "use strict";
const title = document.getElementById("title"),
  price = document.getElementById("price"),
  taxes = document.getElementById("taxes"),
  ads = document.getElementById("ads"),
  discount = document.getElementById("discount"),
  total = document.querySelector(".total"),
  count = document.getElementById("count"),
  category = document.getElementById("category"),
  submit = document.getElementById("submit");

const getTotalPrice = () => {
  console.log("clicked");
  if (price.value === "") alert("Please select a price");
  else {
    let totalPrice =
      (+price.value + +ads.value + +taxes.value) * (1 - +discount.value / 100);
    total.textContent = Math.trunc(totalPrice);
  }
};
