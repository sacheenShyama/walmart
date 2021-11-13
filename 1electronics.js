var container = document.getElementById("container");

var data = [
  {
    image_url:
      "https://i5.walmartimages.com/asr/fe7464f9-9701-41c5-86d8-09ee4738cf00_1.da520b520a0c87f5249a1bf74e3ab2df.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price: "50000",
    detail: 'TCL 32" Class 720P HD LED Roku Smart TV 3 Series 32S331',
  },

  {
    image_url:
      " https://i5.walmartimages.com/asr/9c6fa4b8-e715-4688-92d9-a223510a05f1.fe20863340546bd55fd8330b2c8df05d.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price: "55000",
    detail:
      "TCL 50 Class 5-Series 4K UHD Dolby Vision HDR QLED Roku Smart TV - 50S535",
  },

  {
    image_url:
      "https://i5.walmartimages.com/asr/796e0ca8-5ecd-47d0-9003-db90ca1f5bfb.748e269b09b6c4c6cfcd69f73f88fa0d.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price: "45000",
    detail: "  VIZIO 43 Class FHD LED Smart TV D-Series D43fx-F4 ",
  },
  {
    image_url:
      "https://i5.walmartimages.com/asr/9f2eaa7d-5fe0-45b9-9bf7-77bc214db1e0_1.5e5989d4d5f9eb6a1c38e0c92aa6f50a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price: "4500",
    detail: " Sony 1080p Upscaling HDMI DVD Player - DVP-SR510H ",
  },
  {
    image_url:
      "https://i5.walmartimages.com/asr/85803f59-403b-4a83-a035-8c6b066bcb1f.21dc6fdaffead0b7817f1b128a2b9ced.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price: "49000",
    detail:
      "Lenovo ThinkPad X13 Intel Laptop, 13.3 FHD IPS 500 nits, i5-10310U",
  },
  {
    image_url:
      "https://i5.walmartimages.com/asr/7ebd9343-9d60-4102-9bd4-1e8842837c09.8c80ec15b855a320bc6b24296b3ddb53.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price: "55000",
    detail:
      "ASUS VivoBook Flip J401 14 Touch 2-in-1, Intel Pentium Silver N5030",
  },
  {
    image_url:
      "https://i5.walmartimages.com/asr/d800c7e3-44be-450b-a469-ede1232d66d3.c0c524f67b85c0830096a76876462aa6.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price: "33000",
    detail:
      "Lenovo Ideapad 3 15 Laptop, 15.6, AMD Ryzen 5 5500U, 8GB RAM, 256GB SSD",
  },
  {
    image_url:
      "https://i5.walmartimages.com/asr/d91d32bd-85f3-495c-93d0-005ccf8de00a.f8affc31ba27f50b3470c1272ad665fb.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price: "57000",
    detail: "Canon EOS 2000D (Rebel T7) DSLR Camera with EF-S 18-55mm ",
  },
  {
    image_url:
      "https://i5.walmartimages.com/asr/6c992cf1-231d-40e5-b36b-e1f1d48bb108.7146f1671d292a3b45a2939cd7a6ea6e.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price: "22000",
    detail: "Sony Alpha 1 Mirrorless Digital Camera Body - ILCE-1/B ",
  },
  {
    image_url:
      "https://i5.walmartimages.com/asr/323b063f-9031-40dc-8e6f-c15978f8729e_2.a2132aced411d26131cfe2dc6eca8ab3.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price: "12000",
    detail:
      "KODAK PIXPRO AZ421 Bridge Digital Camera - 16MP 42X Optical Zoom HD720p (White)",
  },
  {
    image_url:
      "https://i5.walmartimages.com/asr/69d0065e-fede-4f39-9093-d4e68d07581e.b9f41b54838d392747ab14e2cff1bcc9.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price: "120000",
    detail: "AT&T iPhone 13 Pro 128GB Graphite",
  },
];
data.push({
  image_url:
    "https://i5.walmartimages.com/asr/6766de27-3e10-4949-9aa3-25974ea84101.2f8f4f87beb8927489add3939b3686fb.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
  price: "150000",
  detail:
    "Straight Talk Apple iPhone 12 Pro Max, 128GB, Silver - Prepaid Smartphone",
});
// console.log(data);
localStorage.setItem("productItem", JSON.stringify(data));
var product = JSON.parse(localStorage.getItem("productItem"));
var ecart = JSON.parse(localStorage.getItem("ecartItem")) || [];

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
    pdetail.textContent = item.detail;

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
    localStorage.setItem("ecartItem", JSON.stringify(ecart));
  }
}
document.getElementById("instore").addEventListener("click", function () {
  window.location.href = "cart.html";
});
