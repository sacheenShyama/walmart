// SlidingIMgHome
document.getElementById("parent");
var image = document.getElementById("imgSlider");

var address = [
  "https://i5.walmartimages.com/dfw/4ff9c6c9-7bf1/k2-_1d32ddc6-2471-4b1c-af89-91ad1805f3e9.v1.jpg?odnHeight=340&odnWidth=604&odnBg=FFFFFF",
  "https://i5.walmartimages.com/dfw/4ff9c6c9-cce4/k2-_2463e655-2943-4bb7-92f9-f64cfdae11ee.v1.jpg?odnHeight=340&odnWidth=604&odnBg=FFFFFF",
  "https://i5.walmartimages.com/dfw/4ff9c6c9-7bf1/k2-_1d32ddc6-2471-4b1c-af89-91ad1805f3e9.v1.jpg?odnHeight=340&odnWidth=604&odnBg=FFFFFF",
  "https://i5.walmartimages.com/dfw/4ff9c6c9-2a53/k2-_7ba0a2f3-e0ef-4ebb-b4f3-ef8357f6c21e.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF",
  "https://i5.walmartimages.com/dfw/4ff9c6c9-7bf1/k2-_1d32ddc6-2471-4b1c-af89-91ad1805f3e9.v1.jpg?odnHeight=340&odnWidth=604&odnBg=FFFFFF",
  "https://i5.walmartimages.com/dfw/4ff9c6c9-594f/k2-_ffafdf43-615a-4226-8fb3-244b7f151aad.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF",
  "https://i5.walmartimages.com/dfw/4ff9c6c9-be3b/k2-_89b32c5d-cb6a-4718-909d-1678536afb8e.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF",
];

var count = 0;
setInterval(function () {
  if (count == 7) {
    count = 0;
  }
  image.src = address[count];
  count++;
}, 3000);

// DivSliderIMG

var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("mySlides");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "grid";
  setTimeout(showSlides, 3000); // Change image every 4 seconds
}
var body = document.querySelector("body");

var techItemData = [
  {
    img_url:
      "https://i5.walmartimages.com/asr/3e505f4f-d5fb-4c0f-a127-01c98f359149.fe69252546bfccdf9dec49b10307de3f.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price: "$ 169.00",
    type: 'Core Innovations 14.1" Ultra Slim Notebook 4GB RAM 64GB SSD Windows 10 CLT146401 (Red)',
    rating: "3.5",
  },
  {
    img_url:
      "https://i5.walmartimages.com/asr/9c78f8b9-9c93-4fca-86e5-fbbfeef67ca1.bf09e59c4848b50608bda2aef111f751.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price: "$ 79.99",
    type: "Raycon RBE755-REDD The Performer True Wireless Bluetooth Earbuds Red",
    rating: "4.0",
  },
  {
    img_url:
      "https://i5.walmartimages.com/asr/91c63867-d18a-4e77-89ec-05d35303dfda.a3a8d070ca6d9b553c58508c52039aab.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price: "$349.00",
    type: 'Gateway 15.6" Ultra Slim Notebook, FHD, Intel® Core™ i3-1115G4, Dual Core, 8GB Memory, 256GB SSD, Tuned by THX™, 1.0MP Webcam, HDMI, Fingerprint Scanner, Cortana, Windows 10 Home, Purple',
    rating: "3.5",
  },
  {
    img_url:
      "https://i5.walmartimages.com/asr/2b163e77-9297-4726-9276-b7319f97ab2e.d1c36937642ec0c5b4912a0c319f31d2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price: "$ 99.97",
    type: "JBL Live 650BT On-Ear Wireless Headphones with Noise-Cancelling and Voice Assistant (Blue)",
    rating: "4.0",
  },
  {
    img_url:
      "https://i5.walmartimages.com/asr/b96fa548-8658-4a43-8d6b-8c91ee336c05.64c2f8906fdbdd5c3fb8f6a933f7dcb9.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price: "$ 149.00",
    type: 'Core Innovations CLT136401SL 14" Notebook - Intel Atom Z3850 - 4GB RAM - 64GB SSD - 1920 x 1080 - Windows 10 S - Silver',
    rating: "5.0",
  },
  {
    img_url:
      "https://i5.walmartimages.com/asr/b62d59a5-d7c6-4e36-ba8f-774f0cbc5466_9.79edcdbc05fdea8fc2e56824f61a17c8.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price: "$ 179.00",
    type: 'Samsung 11.6" Chromebook 4, 32GB, XE310XBA-K01US',
    rating: "4.0",
  },
];

// shop-Buttons

// var shopButton = document.getElementsByClassName("gotoCart").addEventListener("click", gotoCart);

// function gotoCart() {
//   window.location.href = //fill the cart file name here

// }

//Early tech days
var earTechDiv = document.getElementById("ear-tech");

earTech();

function earTech() {
  techItemData.map(function (item) {
    console.log(item);
    var imgDiv = document.createElement("div");
    imgDiv.setAttribute("id", "img");

    var text = document.createElement("div");
    text.setAttribute("id", "text");

    var img = document.createElement("img");
    img.setAttribute("src", item.img_url);

    var h2 = document.createElement("h2");
    h2.textContent = item.price;

    var p = document.createElement("p");
    p.textContent = item.type;

    var pDiv = document.createElement("div");
    pDiv.setAttribute("class", "pDiv");
    pDiv.append(p);

    var button = document.createElement("button");
    button.textContent = "+ Add";

    button.addEventListener("click", function () {
      addtoCart(item);
    });

    var h3 = document.createElement("div");
    h3.innerHTML = `<p>&#9734; ${item.rating}</p>`;

    text.append(h2, pDiv, h3);

    imgDiv.append(img, button, text);

    earTechDiv.append(imgDiv);
  });
}

var trendingCom = [
  {
    img_url:
      "https://i5.walmartimages.com/asr/3e505f4f-d5fb-4c0f-a127-01c98f359149.fe69252546bfccdf9dec49b10307de3f.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price: "$ 369.00",
    type: 'Core Innovations 14.1" Ultra Slim Notebook 4GB RAM 64GB SSD Windows 10 CLT146401 (Red)',
    rating: "5.0",
  },
  {
    img_url:
      "https://i5.walmartimages.com/asr/9c78f8b9-9c93-4fca-86e5-fbbfeef67ca1.bf09e59c4848b50608bda2aef111f751.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price: "$ 479.99",
    type: "Raycon RBE755-REDD The Performer True Wireless Bluetooth Earbuds Red",
    rating: "5.0",
  },
  {
    img_url:
      "https://i5.walmartimages.com/asr/91c63867-d18a-4e77-89ec-05d35303dfda.a3a8d070ca6d9b553c58508c52039aab.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price: "$ 349.00",
    type: 'Gateway 15.6" Ultra Slim Notebook, FHD, Intel® Core™ i3-1115G4, Dual Core, 8GB Memory, 256GB SSD, Tuned by THX™, 1.0MP Webcam, HDMI, Fingerprint Scanner, Cortana, Windows 10 Home, Purple',
    rating: "4.5",
  },
  {
    img_url:
      "https://i5.walmartimages.com/asr/2b163e77-9297-4726-9276-b7319f97ab2e.d1c36937642ec0c5b4912a0c319f31d2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price: "$ 999.97",
    type: "JBL Live 650BT On-Ear Wireless Headphones with Noise-Cancelling and Voice Assistant (Blue)",
    rating: "3.4",
  },
  {
    img_url:
      "https://i5.walmartimages.com/asr/b96fa548-8658-4a43-8d6b-8c91ee336c05.64c2f8906fdbdd5c3fb8f6a933f7dcb9.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price: "$ 449.00",
    type: 'Core Innovations CLT136401SL 14" Notebook - Intel Atom Z3850 - 4GB RAM - 64GB SSD - 1920 x 1080 - Windows 10 S - Silver',
    rating: "4.6",
  },
  {
    img_url:
      "https://i5.walmartimages.com/asr/b62d59a5-d7c6-4e36-ba8f-774f0cbc5466_9.79edcdbc05fdea8fc2e56824f61a17c8.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price: "$ 879.00",
    type: 'Samsung 11.6" Chromebook 4, 32GB, XE310XBA-K01US',
    rating: "4.0",
  },
];

var trendComDiv = document.getElementById("trending-inCom");

trendCom();

function trendCom() {
  trendingCom.map(function (item) {
    var imgDiv = document.createElement("div");
    imgDiv.setAttribute("id", "divImg");

    var text = document.createElement("div");
    text.setAttribute("id", "content");

    var img = document.createElement("img");
    img.setAttribute("src", item.img_url);

    var h2 = document.createElement("h2");
    h2.textContent = item.price;

    var p = document.createElement("p");
    p.textContent = item.type;

    var pDiv = document.createElement("div");
    pDiv.setAttribute("class", "contentDiv");
    pDiv.append(p);

    var button = document.createElement("button");
    button.textContent = "+ Add";

    button.addEventListener("click", function () {
      addtoCart(item);
    });

    var h3 = document.createElement("div");
    h3.innerHTML = `<p>&#9734; ${item.rating}</p>`;

    text.append(h2, pDiv, h3);

    imgDiv.append(img, button, text);

    trendComDiv.append(imgDiv);
  });
}

// // SliderIMG

// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var slides = document.getElementsByClassName("mySlides");
//   for (var i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   slides[slideIndex - 1].style.display = "grid";
//   setTimeout(showSlides, 3000); // Change image every 4 seconds
// }
// var body = document.querySelector("body");

// //Early tech days

// var data = [
//   {
//     img_url:
//       "https://i5.walmartimages.com/asr/3e505f4f-d5fb-4c0f-a127-01c98f359149.fe69252546bfccdf9dec49b10307de3f.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
//     price: "$169.00",
//     type: 'Core Innovations 14.1" Ultra Slim Notebook 4GB RAM 64GB SSD Windows 10 CLT146401 (Red)',
//     rating: "3.5",
//   },
//   {
//     img_url:
//       "https://i5.walmartimages.com/asr/9c78f8b9-9c93-4fca-86e5-fbbfeef67ca1.bf09e59c4848b50608bda2aef111f751.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
//     price: "$79.99",
//     type: "Raycon RBE755-REDD The Performer True Wireless Bluetooth Earbuds Red",
//     rating: "4",
//   },
//   {
//     img_url:
//       "https://i5.walmartimages.com/asr/91c63867-d18a-4e77-89ec-05d35303dfda.a3a8d070ca6d9b553c58508c52039aab.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
//     price: "$349.00",
//     type: 'Gateway 15.6" Ultra Slim Notebook, FHD, Intel® Core™ i3-1115G4, Dual Core, 8GB Memory, 256GB SSD, Tuned by THX™, 1.0MP Webcam, HDMI, Fingerprint Scanner, Cortana, Windows 10 Home, Purple',
//     rating: "3.5",
//   },
//   {
//     img_url:
//       "https://i5.walmartimages.com/asr/2b163e77-9297-4726-9276-b7319f97ab2e.d1c36937642ec0c5b4912a0c319f31d2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
//     price: "$99.97",
//     type: "JBL Live 650BT On-Ear Wireless Headphones with Noise-Cancelling and Voice Assistant (Blue)",
//     rating: "4",
//   },
//   {
//     img_url:
//       "https://i5.walmartimages.com/asr/b96fa548-8658-4a43-8d6b-8c91ee336c05.64c2f8906fdbdd5c3fb8f6a933f7dcb9.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
//     price: "$149.00",
//     type: 'Core Innovations CLT136401SL 14" Notebook - Intel Atom Z3850 - 4GB RAM - 64GB SSD - 1920 x 1080 - Windows 10 S - Silver',
//     rating: "5",
//   },
//   {
//     img_url:
//       "https://i5.walmartimages.com/asr/b62d59a5-d7c6-4e36-ba8f-774f0cbc5466_9.79edcdbc05fdea8fc2e56824f61a17c8.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
//     price: "$179.00",
//     type: 'Samsung 11.6" Chromebook 4, 32GB, XE310XBA-K01US',
//     rating: "4",
//   },
//   {
//     img_url:
//       "https://i5.walmartimages.com/asr/b96fa548-8658-4a43-8d6b-8c91ee336c05.64c2f8906fdbdd5c3fb8f6a933f7dcb9.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
//     price: "$1299",
//     type: " (3.2) 3.2 stars out of 234 reviews 234 reviews",
//     rating: "5",
//   },
// ];

// // FOOTER
