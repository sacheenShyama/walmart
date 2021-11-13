var yourmovies = JSON.parse(localStorage.getItem("ecartmovie"));
console.log(yourmovies);

var yourItem = JSON.parse(localStorage.getItem("ecartItem"));
// var yourmovies = JSON.parse(localStorage.getItem("ecartmovie"));
console.log(yourItem);
// var yourmovies = JSON.parse(localStorage.getItem("ecartmovie"));
// console.log(yourmovies);

displayFavitem(yourItem);

function displayFavitem(yourItem) {
  document.getElementById("cartcontainer").innerHTML = "";
  yourItem.map(function (item) {
    var image = document.createElement("img");
    image.setAttribute("src", item.image_url);
    image.setAttribute("class", "imgdiv");

    var pPrice = document.createElement("p");
    pPrice.textContent = item.price;
    pPrice.setAttribute("class", "price");

    var pdetail = document.createElement("p");
    pdetail.textContent = item.detail;
    pdetail.setAttribute("class", "detail");

    var divcont = document.createElement("div");
    divcont.setAttribute("class", "divCont");
    divcont.append(image, pPrice, pdetail);

    document.querySelector(".cart2ndmain").append(divcont);
  });
}
displayFavitem(yourmovies);

function displayFavitem(yourmovies) {
  document.getElementById("cartcontainer").innerHTML = "";
  yourmovies.map(function (item) {
    var image = document.createElement("img");
    image.setAttribute("src", item.image_url);
    image.setAttribute("class", "imgdiv");

    var pPrice = document.createElement("p");
    pPrice.textContent = item.price;
    pPrice.setAttribute("class", "price");

    var pdetail = document.createElement("p");
    pdetail.textContent = item.name;
    pdetail.setAttribute("class", "detail");

    var divcont = document.createElement("div");
    divcont.setAttribute("class", "divCont");
    divcont.append(image, pPrice, pdetail);

    document.querySelector(".cart2ndmain").append(divcont);
  });
}

var count = 0;
var total1 = yourItem.reduce(function (acc, cv) {
  count++;
  return acc + Number(cv.price);
}, 0);
var total2 = yourmovies.reduce(function (acc, cv) {
  count++;
  return acc + Number(cv.price);
}, 0);
console.log(count);
// console.log(total);
document.getElementById("total").innerHTML = `<h3> Total cost is $ ${
  total1 + total2
}</h3>`;

document.getElementById("checkout").addEventListener("click", function () {
  window.location.href = "payment.html";
});
document.getElementById(
  "totalitem"
).innerHTML = `<p>Total item (${count}-items)</p>`;

document.getElementById("cross").addEventListener("click", function () {
  window.location.href = "1eletronics.html";
});
