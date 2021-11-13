document.getElementById("parent").addEventListener("click", parent);
var image = document.getElementById("imgSlider");
var address = [
  "https://www.filmibeat.com/fanimg/movie/14800/vikrant-rona-photos-images-71982.jpg",
  "https://i.ytimg.com/vi/LZlYcdvSFJM/maxresdefault.jpg",
  "https://pbs.twimg.com/media/FDuTxMlVUAYFKF2?format=jpg&name=large",
  "https://pbs.twimg.com/media/EKIR4xUUUAEmTfm?format=jpg&name=medium",
  "https://pbs.twimg.com/media/FDFUWrFVgAA5DPZ?format=jpg&name=4096x4096",
  "https://pbs.twimg.com/media/EEFDxgXU8AAjA1z?format=jpg&name=large",
  "https://pbs.twimg.com/media/FBaCYloVgAE6S2i?format=jpg&name=medium",
];
var count = 0;
setInterval(function () {
  if (count == 7) {
    count = 0;
  }
  image.src = address[count];
  count++;
}, 2000);

var container = document.getElementById("container");
var data = [
  {
    image_url:
      "https://i5.walmartimages.com/asr/f748ec7a-b667-4b8f-a1d5-fad7aa706a7e_1.53b3eaf4a5376a1380730953be4646b3.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price: "28.04",
    name: " 4-Movie Marathon: Conspiracy(DVD)",
  },
  {
    image_url:
      "https://i5.walmartimages.com/asr/73b6017f-f96e-4f01-80cb-b09c1d7b3ef8_1.fe5d2f02870ab7feea88c2862a670664.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price: "9.00",
    name: "4 Film Favorites: Batman Collection (DVD) ",
  },
  {
    image_url:
      "https://i5.walmartimages.com/asr/69581346-1188-445c-84a7-0f0326cda496.62daccfca284a77072e4d507cfb5e5b7.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price: "5.00",
    name: "Skyscraper (DVD)",
  },
  {
    image_url:
      "https://i5.walmartimages.com/asr/e3d0bfa3-f6db-46bd-bf37-b8fa4b35e039_1.6e3a1fd2c9da007996129568c572b478.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price: "3.74",
    name: "The Accountant (DVD)",
  },
  {
    image_url:
      "https://i5.walmartimages.com/asr/f748ec7a-b667-4b8f-a1d5-fad7aa706a7e_1.53b3eaf4a5376a1380730953be4646b3.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price: "28.04",
    name: "4-Movie Marathon: Conspiracy(DVD)",
  },
  {
    image_url:
      "https://i5.walmartimages.com/asr/73b6017f-f96e-4f01-80cb-b09c1d7b3ef8_1.fe5d2f02870ab7feea88c2862a670664.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price: "9.00",
    name: "4 Film Favorites: Batman Collection (DVD)",
  },
  {
    image_url:
      "https://i5.walmartimages.com/asr/69581346-1188-445c-84a7-0f0326cda496.62daccfca284a77072e4d507cfb5e5b7.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price: "5.00",
    name: "Skyscraper (DVD)",
  },
];
data.push({
  image_url:
    "https://i5.walmartimages.com/asr/e3d0bfa3-f6db-46bd-bf37-b8fa4b35e039_1.6e3a1fd2c9da007996129568c572b478.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
  price: "3.00",
  name: "The Accountant (DVD)",
});
console.log(data);
console.log(container);

localStorage.setItem("movieItem", JSON.stringify(data));
var product = JSON.parse(localStorage.getItem("movieItem"));

console.log(product);
var ecart = JSON.parse(localStorage.getItem("ecartmovie")) || [];

function handlePriceSort() {
  var selected = document.getElementById("sortByPrice").value;
  console.log(selected);

  if (selected == "low") {
    product = product.sort(function (a, b) {
      return a.price - b.price;
    });
  } else if (selected == "high") {
    product = product.sort(function (a, b) {
      return b.price - a.price;
    });
  }
  displayProduct(product);
}
displayProduct(product);

function displayProduct(product) {
  document.getElementById("container").innerHTML = "";
  product.map(function (item) {
    var img = document.createElement("img");
    img.setAttribute("src", item.image_url);

    var button = document.createElement("button");
    button.textContent = "Add";
    button.addEventListener("click", function () {
      addtoCart(item);
    });

    var pPrice = document.createElement("p");
    pPrice.setAttribute("class", "price");
    pPrice.textContent = item.price;

    var pdetail = document.createElement("p");
    pdetail.setAttribute("class", "detail");
    pdetail.textContent = item.name;

    var pship = document.createElement("p");
    pship.setAttribute("class", "shipping");
    pship.textContent = "3 +dayshipping";
    var divCont = document.createElement("div");
    container.append(divCont);
    divCont.append(img, button, pPrice, pdetail, pship);

    // console.log(img, button, pPrice, pdetail);
    // function addtoCart(item) {
    //   ecart.push(item);
    //   localStorage.setItem("ecartItem", JSON.stringify(ecart));
    // }
  });
  function addtoCart(item) {
    ecart.push(item);
    localStorage.setItem("ecartmovie", JSON.stringify(ecart));
  }
}

document.getElementById("instore").addEventListener("click", function () {
  window.location.href = "cart.html";
});
