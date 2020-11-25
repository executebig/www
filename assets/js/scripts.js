var body = document.querySelector("body");
var menuTrigger = document.querySelector("#toggle-main-menu-mobile");
var menuContainer = document.querySelector("#main-menu-mobile");
var searchToggle = document.querySelectorAll(".searchToggle");
var searchContainer = document.querySelector("#search-container");
var cancelTrigger = document.querySelector("#cancelSearch");

var client = algoliasearch("5UQN5RC9UK", "19f815aefb3ec262ec3e715b0bbe4e85");
var index = client.initIndex(searchIndex);

autocomplete("#search-input", { hint: false, appendTo: "#searchResults" }, [
  {
    source: autocomplete.sources.hits(index, { hitsPerPage: 5 }),
    displayKey: "title",
    templates: {
      suggestion: function (suggestion) {
        return suggestion._highlightResult.title.value;
      },
    },
  },
])
  .on("autocomplete:shown", function (event, suggestion, dataset, context) {
    document.getElementById("cancelSearch").style.visibility = "hidden";
  })
  .on("autocomplete:closed", function (event, suggestion, dataset, context) {
    document.getElementById("cancelSearch").style.visibility = "visible";
  })
  .on("autocomplete:selected", function (event, suggestion, dataset, context) {
    window.location.href = suggestion.permalink;
  });

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
