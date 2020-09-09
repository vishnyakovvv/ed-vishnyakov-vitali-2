// modal window

var popup = document.querySelector(".modal_js"),
  buttonOpen = document.querySelector(".button-open_js"),
  buttonClose = document.querySelector(".button-close_js"),
  input = document.querySelector(".input-text_js");

buttonOpen.addEventListener("click", function () {
  popup.classList.add("modal-bg_open");
  input.focus();
});

buttonClose.addEventListener("click", function () {
  popup.classList.remove("modal-bg_open");
  buttonOpen.focus();
});

window.addEventListener("keydown", function (e) {
  if (e.code === "Escape" && popup.classList.contains("modal-bg_open")) {
    popup.classList.remove("modal-bg_open");
  }
});

// mobile menu

var buttonOpenMenu = document.querySelector(".open-mobile-menu_js"),
  buttonCloseMenu = document.querySelector(".close-mobile-menu_js");

buttonOpenMenu.addEventListener("click", function () {
  mobile.classList.add("mobile-menu__open");
});

buttonCloseMenu.addEventListener("click", function () {
  mobile.classList.remove("mobile-menu__close");
});
