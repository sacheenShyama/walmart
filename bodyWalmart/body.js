// SliderIMG

var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("mySlides");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "grid";
  setTimeout(showSlides, 3000); // Change image every 4 seconds
}
var body = document.querySelector("body")


//Early tech days

var data = [
  {
    img_url:"https://i5.walmartimages.com/asr/3e505f4f-d5fb-4c0f-a127-01c98f359149.fe69252546bfccdf9dec49b10307de3f.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price:"$169.00",
    "type":"Core Innovations 14.1\" Ultra Slim Notebook 4GB RAM 64GB SSD Windows 10 CLT146401 (Red)",
    "rating":"3.5"},
  {
    img_url:"https://i5.walmartimages.com/asr/9c78f8b9-9c93-4fca-86e5-fbbfeef67ca1.bf09e59c4848b50608bda2aef111f751.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price:"$79.99",
    type:"Raycon RBE755-REDD The Performer True Wireless Bluetooth Earbuds Red",
    rating:"4"},
  {"img_url":"https://i5.walmartimages.com/asr/91c63867-d18a-4e77-89ec-05d35303dfda.a3a8d070ca6d9b553c58508c52039aab.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
  "price":"$349.00","type":"Gateway 15.6\" Ultra Slim Notebook, FHD, Intel® Core™ i3-1115G4, Dual Core, 8GB Memory, 256GB SSD, Tuned by THX™, 1.0MP Webcam, HDMI, Fingerprint Scanner, Cortana, Windows 10 Home, Purple","rating":"3.5"},
  {"img_url":"https://i5.walmartimages.com/asr/2b163e77-9297-4726-9276-b7319f97ab2e.d1c36937642ec0c5b4912a0c319f31d2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF","price":"$99.97","type":"JBL Live 650BT On-Ear Wireless Headphones with Noise-Cancelling and Voice Assistant (Blue)","rating":"4"},
  {"img_url":"https://i5.walmartimages.com/asr/b96fa548-8658-4a43-8d6b-8c91ee336c05.64c2f8906fdbdd5c3fb8f6a933f7dcb9.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF","price":"$149.00","type":"Core Innovations CLT136401SL 14\" Notebook - Intel Atom Z3850 - 4GB RAM - 64GB SSD - 1920 x 1080 - Windows 10 S - Silver","rating":"5"},
  {"img_url":"https://i5.walmartimages.com/asr/b62d59a5-d7c6-4e36-ba8f-774f0cbc5466_9.79edcdbc05fdea8fc2e56824f61a17c8.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF","price":"$179.00","type":"Samsung 11.6\" Chromebook 4, 32GB, XE310XBA-K01US","rating":"4"},
  {"img_url":"https://i5.walmartimages.com/asr/b96fa548-8658-4a43-8d6b-8c91ee336c05.64c2f8906fdbdd5c3fb8f6a933f7dcb9.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF","price":"$1299","type":" (3.2) 3.2 stars out of 234 reviews 234 reviews","rating":"5"}
]

// FOOTER
