var body = document.querySelector("body");
var menuTrigger = document.querySelector("#toggle-main-menu-mobile");
var menuContainer = document.querySelector("#main-menu-mobile");

menuTrigger.onclick = function () {
  menuContainer.classList.toggle("open");
  menuTrigger.classList.toggle("is-active");
  body.classList.toggle("lock-scroll");
};

InstantClick.init();

if (umami !== undefined) { // send tracking updates
  InstantClick.on("change", function () {
    umami.trackView(location.pathname + location.search)
  })
}
