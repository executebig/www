var body = document.querySelector("body");
var menuTrigger = document.querySelector("#toggle-main-menu-mobile");
var menuContainer = document.querySelector("#main-menu-mobile");
var searchToggle = document.querySelectorAll(".searchToggle");
var searchContainer = document.querySelector("#search-container");
var cancelTrigger = document.querySelector("#cancelSearch");

menuTrigger.onclick = function () {
  menuContainer.classList.toggle("open");
  menuTrigger.classList.toggle("is-active");
  body.classList.toggle("lock-scroll");
};

searchToggle.forEach((el) => {
  el.onclick = toggleSearch;
});
cancelTrigger.onclick = toggleSearch;

function toggleSearch() {
  searchContainer.classList.toggle("open");
  menuTrigger.classList.toggle("is-active");
  body.classList.toggle("lock-scroll");

  if (searchContainer.classList.contains("open")) {
    window.setTimeout(function () {
      document.querySelector("#search-input").focus();
    }, 50);
  }
}
