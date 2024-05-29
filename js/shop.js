document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("menu-click").addEventListener("click", menuDisplay);
});
function menuDisplay() {
  document.getElementById("aside").style.opacity = 1;
  document.getElementById("aside").style.visibility = "visible";
}
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("close").addEventListener("click", menuClose);
});
function menuClose() {
  document.getElementById("aside").style.opacity = 0;
  document.getElementById("aside").style.visibility = "hidden";
}
//---------------------------------------------------------cart aside
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("cart-click-id")
    .addEventListener("click", displayCart);
});
function displayCart() {
  document.getElementById("aside-cart").style.opacity = 1;
  document.getElementById("aside-cart").style.visibility = "visible";
}
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("close1").addEventListener("click", cartClose);
});
function cartClose() {
  document.getElementById("aside-cart").style.opacity = 0;
  document.getElementById("aside-cart").style.visibility = "hidden";
}
//---------------------------------------------------Heart Images--------------
var heartImages = document.querySelectorAll(".heart-img");

heartImages.forEach(function (image) {
  image.addEventListener("click", changeFunc);
});

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

var heartImages = document.querySelectorAll(".heart-img");

heartImages.forEach(function (image) {
  image.addEventListener("mouseover", hoverFuncover);
});
heartImages.forEach(function (image) {
  image.addEventListener("mouseout", hoverFuncout);
});

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

function displayBtnFun() {
  var btn = this.parentElement.querySelector(".img-btn");
  if (btn) {
    btn.style.display = "inline-block";
  }
}

function hideBtnFun() {
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

function displaySearch() {
  document.getElementById("Search").style.display = "block";
}
//-----------------------------------------cart images
var imagesCart = document.querySelectorAll(".imageAddToCart");

imagesCart.forEach(function (img) {
  img.addEventListener("click", changeImageInCart);
});

function changeImageInCart() {
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
//----------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("allproducts")
    .addEventListener("click", displayProduct1);

  function displayProduct1(event) {
    event.preventDefault();

    document.getElementById("men").style.color = "black";
    document.getElementById("allproducts").style.color = "#0D6EFD";
    document.getElementById("watch").style.color = "black";
    document.getElementById("women").style.color = "black";
    document.getElementById("shoes").style.color = "black";

    document.querySelectorAll(".women").forEach(function (element) {
      element.style.display = "block";
    });
    document.querySelectorAll(".shoes").forEach(function (element) {
      element.style.display = "block";
    });
    document.querySelectorAll(".watch").forEach(function (element) {
      element.style.display = "block";
    });
    document.querySelectorAll(".men").forEach(function (element) {
      element.style.display = "block";
    });
  }

  document.getElementById("women").addEventListener("click", displayProduct2);

  function displayProduct2(event) {
    event.preventDefault();
    document.getElementById("men").style.color = "black";
    document.getElementById("women").style.color = "#0D6EFD";
    document.getElementById("watch").style.color = "black";
    document.getElementById("allproducts").style.color = "black";
    document.getElementById("shoes").style.color = "black";

    document.querySelectorAll(".women").forEach(function (element) {
      element.style.display = "block";
    });
    document.querySelectorAll(".shoes").forEach(function (element) {
      element.style.display = "none";
    });
    document.querySelectorAll(".watch").forEach(function (element) {
      element.style.display = "none";
    });
    document.querySelectorAll(".men").forEach(function (element) {
      element.style.display = "none";
    });
  }

  document.getElementById("men").addEventListener("click", displayProduct3);

  function displayProduct3(event) {
    event.preventDefault();
    document.getElementById("men").style.color = "#0D6EFD";
    document.getElementById("women").style.color = "black";
    document.getElementById("watch").style.color = "black";
    document.getElementById("allproducts").style.color = "black";
    document.getElementById("shoes").style.color = "black";

    document.querySelectorAll(".women").forEach(function (element) {
      element.style.display = "none";
    });
    document.querySelectorAll(".shoes").forEach(function (element) {
      element.style.display = "none";
    });
    document.querySelectorAll(".watch").forEach(function (element) {
      element.style.display = "none";
    });
    document.querySelectorAll(".men").forEach(function (element) {
      element.style.display = "block";
    });
  }

  document.getElementById("watch").addEventListener("click", displayProduct4);

  function displayProduct4(event) {
    event.preventDefault();

    document.getElementById("men").style.color = "black";
    document.getElementById("watch").style.color = "#0D6EFD";
    document.getElementById("allproducts").style.color = "black";
    document.getElementById("women").style.color = "black";
    document.getElementById("shoes").style.color = "black";

    document.querySelectorAll(".women").forEach(function (element) {
      element.style.display = "none";
    });
    document.querySelectorAll(".shoes").forEach(function (element) {
      element.style.display = "none";
    });
    document.querySelectorAll(".watch").forEach(function (element) {
      element.style.display = "block";
    });
    document.querySelectorAll(".men").forEach(function (element) {
      element.style.display = "none";
    });
  }

  document.getElementById("shoes").addEventListener("click", displayProduct5);

  function displayProduct5(event) {
    event.preventDefault();

    document.getElementById("men").style.color = "black";
    document.getElementById("shoes").style.color = "#0D6EFD";
    document.getElementById("allproducts").style.color = "black";
    document.getElementById("women").style.color = "black";
    document.getElementById("watch").style.color = "black";

    document.querySelectorAll(".women").forEach(function (element) {
      element.style.display = "none";
    });
    document.querySelectorAll(".shoes").forEach(function (element) {
      element.style.display = "block";
    });
    document.querySelectorAll(".watch").forEach(function (element) {
      element.style.display = "none";
    });
    document.querySelectorAll(".men").forEach(function (element) {
      element.style.display = "none";
    });
  }
});
