const body = document.querySelector("body");
const menuTrigger = document.querySelector("#toggle-main-menu-mobile");
const menuContainer = document.querySelector("#main-menu-mobile");
const searchToggle = document.querySelectorAll(".searchToggle");
const searchContainer = document.querySelector("#search-container");
const searchBar = document.querySelector(".search-bar");
const cancelTrigger = document.querySelector("#cancelSearch");

const client = algoliasearch("5UQN5RC9UK", "19f815aefb3ec262ec3e715b0bbe4e85");
const index = client.initIndex(searchIndex);

function newHitsSource(index, params) {
  return function doSearch(query, cb) {
    index
      .search(query, params)
      .then(function (res) {
        cb(res.hits, res);
      })
      .catch(function (err) {
        console.error(err);
        cb([]);
      });
  };
}

String.prototype.toProperCase = function () {
  return this.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

autocomplete("#search-input", { hint: false, appendTo: "#searchResults" }, [
  {
    source: newHitsSource(index, { hitsPerPage: 5 }),
    displayKey: "title",
    templates: {
      suggestion: function (suggestion) {
        let prefix = suggestion.type.toProperCase();

        if (suggestion.type === "journals/tags") {
          prefix = "Tag";
        } else if (prefix === suggestion.title) {
          prefix = "Page";
        }

        return (
          `<span class="badge search-category">${prefix}</span>&ensp;` +
          suggestion._highlightResult.title.value
        );
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

document.onkeydown = function (evt) {
  evt = evt || window.event;
  if ("key" in evt && (evt.key === "Escape" || evt.key === "Esc")) {
    if (searchContainer.classList.contains("open")) {
      toggleSearch();
    }
  }
};

menuTrigger.onclick = function () {
  menuContainer.classList.toggle("open");
  menuTrigger.classList.toggle("is-active");
  body.classList.toggle("lock-scroll");
};

searchToggle.forEach((el) => {
  el.onclick = toggleSearch;
});
cancelTrigger.onclick = toggleSearch;
searchContainer.onclick = function (e) {
  var e = e || window.event;
  if (e.target !== this) return;
  else if (!this.classList.contains("open")) return;
  else toggleSearch();
};

function toggleSearch() {
  searchContainer.classList.toggle("open");
  body.classList.toggle("lock-scroll");
  searchBar.style.opacity ^= 1;

  if (!searchBar.classList.contains("active")) {
    /* trigger reflow */
    searchBar.style.animation = "none";
    searchBar.offsetHeight;
    searchBar.style.animation = null;
  }

  searchBar.classList.toggle("active");

  if (searchContainer.classList.contains("open")) {
    window.setTimeout(function () {
      document.querySelector("#search-input").focus();
    }, 100);
  }
}
