// Midterm Task 3 - live search, price sort and Premium labels
// Plain JavaScript. Works on the product cards already in index.html.

const N = 42;                      // last two digits of SP24-BCS-142
const PREMIUM_LIMIT = N * 100;     // 4200

const grid = document.getElementById("product-grid");
const searchBox = document.getElementById("search-box");
const sortBtn = document.getElementById("sort-btn");
const noResults = document.getElementById("no-results");
const radios = document.querySelectorAll('input[name="category"]');

// All existing card columns (the .col wrappers)
const cols = Array.from(grid.querySelectorAll(":scope > .col"));

// Read the price from the card text, e.g. "Rs. 5,990" -> 5990
function getPrice(col) {
  const text = col.querySelector(".card-text").textContent;
  return Number(text.replace(/[^0-9]/g, ""));
}

function getName(col) {
  return col.querySelector(".card-title").textContent.trim().toLowerCase();
}

// 1) Premium label on load
cols.forEach(function (col) {
  if (getPrice(col) > PREMIUM_LIMIT) {
    const badge = document.createElement("span");
    badge.className = "premium-badge";
    badge.textContent = "Premium";
    col.querySelector(".card-text").appendChild(badge);
  }
});

// 2) Live search - works together with the CSS category filter.
//    Search adds .search-hidden; the CSS filter adds display:none.
//    A card is visible only if neither hides it.
function applySearch() {
  const term = searchBox.value.trim().toLowerCase();

  cols.forEach(function (col) {
    col.classList.toggle("search-hidden", !getName(col).includes(term));
  });

  updateNoResults();
}

function updateNoResults() {
  const anyVisible = cols.some(function (col) {
    return getComputedStyle(col).display !== "none";
  });
  noResults.hidden = anyVisible;
  grid.hidden = !anyVisible;   // message shows in place of the grid
}

searchBox.addEventListener("input", applySearch);
// Category is pure CSS, but we re-check the "No products found" message when it changes
radios.forEach(function (radio) {
  radio.addEventListener("change", updateNoResults);
});

// 3) Sort by price - toggles ascending / descending, moves existing elements
let ascending = true;

sortBtn.addEventListener("click", function () {
  const sorted = cols.slice().sort(function (a, b) {
    return ascending ? getPrice(a) - getPrice(b) : getPrice(b) - getPrice(a);
  });
  sorted.forEach(function (col) {
    grid.appendChild(col);   // appendChild moves the existing card
  });
  sortBtn.textContent = ascending ? "Sort by price (Low → High)" : "Sort by price (High → Low)";
  ascending = !ascending;
});
