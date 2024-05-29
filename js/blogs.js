document.addEventListener("DOMContentLoaded", function () {
  //-----------------------------------------------------------------Search
  document
    .getElementById("Search-icon")
    .addEventListener("click", displaySearch);

  function displaySearch() {
    document.getElementById("Search").style.display = "block";
  }

  //------------------------------------------------------------------Menu Display
  document.getElementById("menu-click").addEventListener("click", menuDisplay);

  function menuDisplay() {
    document.getElementById("aside").style.opacity = 1;
    document.getElementById("aside").style.visibility = "visible";
  }

  document.getElementById("close").addEventListener("click", menuClose);

  function menuClose() {
    document.getElementById("aside").style.opacity = 0;
    document.getElementById("aside").style.visibility = "hidden";
  }
  //---------------------------------------------------------cart aside

  document
    .getElementById("cart-click-id")
    .addEventListener("click", displayCart);

  function displayCart() {
    document.getElementById("aside-cart").style.opacity = 1;
    document.getElementById("aside-cart").style.visibility = "visible";
  }

  document.getElementById("close1").addEventListener("click", cartClose);

  function cartClose() {
    document.getElementById("aside-cart").style.opacity = 0;
    document.getElementById("aside-cart").style.visibility = "hidden";
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
});
