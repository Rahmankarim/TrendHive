document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("menu-click").addEventListener("click", menuDisplay);
});
function menuDisplay(event) {
  event.preventDefault();
  document.getElementById("aside").style.opacity = 1;
  document.getElementById("aside").style.visibility = "visible";
}
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("close").addEventListener("click", menuClose);
});
function menuClose(event) {
  event.preventDefault();

  document.getElementById("aside").style.opacity = 0;
  document.getElementById("aside").style.visibility = "hidden";
}
//---------------------------------------------------------cart aside
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("cart-click-id")
    .addEventListener("click", displayCart);
});
function displayCart(event) {
  event.preventDefault();
  document.getElementById("aside-cart").style.opacity = 1;
  document.getElementById("aside-cart").style.visibility = "visible";
}
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("close1").addEventListener("click", cartClose);
});
function cartClose(event) {
  event.preventDefault();
  document.getElementById("aside-cart").style.opacity = 0;
  document.getElementById("aside-cart").style.visibility = "hidden";
}
//-------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("section1-images")
    .addEventListener("mouseover", displaytext);
  document
    .getElementById("text-shop")
    .addEventListener("mouseover", displaytext);
  document.getElementById("text-shop").addEventListener("mouseout", hideText);
  document
    .getElementById("section1-images")
    .addEventListener("mouseout", hideText);
});

function displaytext(event) {
  event.preventDefault();
  document.getElementById("text-shop").style.visibility = "visible";
  document.getElementById("text-shop").style.opacity = 1;
}

function hideText(event) {
  event.preventDefault();
  document.getElementById("text-shop").style.visibility = "hidden";
  document.getElementById("text-shop").style.opacity = 0;
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("text-shop2")
    .addEventListener("mouseover", displaytext2);

  document
    .getElementById("section2-images")
    .addEventListener("mouseover", displaytext2);

  document.getElementById("text-shop2").addEventListener("mouseout", hideText2);
  document
    .getElementById("section2-images")
    .addEventListener("mouseout", hideText2);

  document
    .getElementById("text-shop3")
    .addEventListener("mouseover", displaytext3);
  document
    .getElementById("section3-images")
    .addEventListener("mouseover", displaytext3);

  document.getElementById("text-shop3").addEventListener("mouseout", hideText3);
  document
    .getElementById("section3-images")
    .addEventListener("mouseout", hideText3);
  //-------------------------------------------------Onclick event on heart
  var heartImages = document.querySelectorAll(".heart-img");

  heartImages.forEach(function (image) {
    image.addEventListener("click", changeFunc);
  });
  //-------------------------------Hover On heart Image

  var heartImages = document.querySelectorAll(".heart-img");

  heartImages.forEach(function (image) {
    image.addEventListener("mouseover", hoverFuncover);
  });
  heartImages.forEach(function (image) {
    image.addEventListener("mouseout", hoverFuncout);
  });
});

function displaytext2(event) {
  event.preventDefault();
  document.getElementById("text-shop2").style.visibility = "visible";
  document.getElementById("text-shop2").style.opacity = 1;
}

function hideText2(event) {
  event.preventDefault();
  document.getElementById("text-shop2").style.visibility = "hidden";
  document.getElementById("text-shop2").style.opacity = 0;
}

function displaytext3(event) {
  event.preventDefault();
  document.getElementById("text-shop3").style.visibility = "visible";
  document.getElementById("text-shop3").style.opacity = 1;
}

function hideText3(event) {
  event.preventDefault();
  document.getElementById("text-shop3").style.visibility = "hidden";
  document.getElementById("text-shop3").style.opacity = 0;
}

//-------------------------------------------------Onclick event on heart

function changeFunc() {
  var currentSrc = this.src;

  if (currentSrc.includes("icon-heart-02.png")) {
    this.src = "images/icon-heart-01.png";
    window.alert("Item Has been added to your Wishlist");
  } else {
    this.src = "images/icon-heart-02.png";
  }
}

//-------------------------------Hover On heart Image

function hoverFuncover() {
  var currentSrc = this.src;

  if (currentSrc.includes("icon-heart-02.png")) {
    this.src = "images/icon-heart-01.png";
  } else {
    this.src = "images/icon-heart-02.png";
  }
}

function hoverFuncout() {
  var currentSrc = this.src;

  if (currentSrc.includes("icon-heart-02.png")) {
    this.src = "images/icon-heart-01.png";
  } else {
    this.src = "images/icon-heart-02.png";
  }
}

//-----------------------button on text-----------------------------
var imagesforbtn = document.querySelectorAll(".transform-images");

imagesforbtn.forEach(function (image) {
  image.addEventListener("mouseover", displayBtnFun);
  image.addEventListener("mouseout", hideBtnFun);
});

function displayBtnFun(event) {
  event.preventDefault();
  var btn = this.parentElement.querySelector(".img-btn");
  if (btn) {
    btn.style.display = "inline-block";
  }
}

function hideBtnFun(event) {
  event.preventDefault();
  var btn = this.parentElement.querySelector(".img-btn");
  if (btn) {
    btn.style.display = "none";
  }
}

//--------------------------------------------button-hover

var ButtonHover = document.querySelectorAll(".img-btn");
ButtonHover.forEach(function (button) {
  button.addEventListener("mouseover", displayBtnOnHover);
});
function displayBtnOnHover() {
  this.style.display = "inline-block";
}
//-----------------------------------------------------Search

document.getElementById("Search-icon").addEventListener("click", displaySearch);

function displaySearch(event) {
  event.preventDefault();
  document.getElementById("Search").style.display = "block";
}
//-----------------------------------------cart images-------------------------------
var imagesCart = document.querySelectorAll(".imageAddToCart");

imagesCart.forEach(function (img) {
  img.addEventListener("click", changeImageInCart);
});

function changeImageInCart(event) {
  event.preventDefault();
  let clickedImage = this;

  let newSrc = clickedImage.src;

  let imageInCart = document.getElementById("img-fluidcimageInCart");

  imageInCart.src = newSrc;
}

//--------------------------------------------------------------------display and hide cart

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".img-btn").forEach(function (element) {
    element.addEventListener("click", displaycartimages);
  });

  function displaycartimages(event) {
    event.preventDefault();
    document.getElementById("quickview").style.display = "block";
  }
  document.getElementById("close-cart").addEventListener("click", closeCart);

  function closeCart() {
    document.getElementById("quickview").style.display = "none";
    document.querySelectorAll(".img-btn").forEach(function (element) {
      element.style.display = "none";
    });
  }
});

//--------------------------------------------------------------------------------------------
