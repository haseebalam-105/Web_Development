# Lab Mid Term – Upgrade Your E-commerce Listing and Product Pages

| | |
|---|---|
| **Name** | Haseeb Alam |
| **Roll number** | SP24-BCS-142 |
| **N** (last two digits) | 42 |
| **BP** = 600 + N | **642px** |
| **H** = (N × 7) mod 360 | **294** → accent colour `hsl(294, 70%, 45%)` |
| **K** = (N mod 3) + 3 | **3** categories |
| Sticky offset = (N mod 40) + 70 | **112px** |
| Premium limit = N × 100 | **Rs. 4,200** |

Base project: Assignment 2 (Sapphire clone, HTML + Bootstrap 5.3 + custom CSS). Bootstrap is kept; header, product cards and footer are unchanged.

## How to run
No build or server needed. Open `midterm/index.html` (listing page) or `midterm/product.html` (product page) in Chrome/Edge/Firefox (any recent version – `:has()` is required for Task 1).
Test at **375px, 642px and 1280px** using DevTools → Toggle device toolbar (Ctrl+Shift+M) → Responsive → type the width.

## Files changed
| File | Change |
|---|---|
| `index.html` | Added category class to each card column, filter radios, search box, sort button, "No products found" message, `id="product-grid"`, linked `script.js` |
| `product.html` | Replaced Bootstrap row/cols with a `.product-layout` grid (image / details / description) and a long description |
| `css/style.css` | Appended midterm section: accent variable, Task 1 filter CSS, Task 2 grid + sticky, Task 3 helper classes |
| `script.js` | **New** – live search, price sort, Premium labels |
| `README.md` | Replaced with this file |
| `SP24-BCS-142-midterm.pdf` | **New** – screenshots + code |

## Task 1 – CSS-only category filter (`index.html`, `style.css`)
- K = 3 categories: `cat-suits` (6 cards), `cat-tops` (Kurtas & Shirts, 3), `cat-essentials` (Dupattas & Trousers, 3), added as a class on each `.col`. 4 radios above the grid (All + 3), "All" has `checked`.
- Rule `main:has(#filter-tops:checked) #product-grid > .col:not(.cat-tops) { display:none; }` – `:has()` detects the checked radio; `display:none` removes the column from the Bootstrap flex row, so there are no gaps.
- `input:checked + label` gets the accent background `hsl(294,70%,45%)` so the selected filter looks selected. No JavaScript is involved.

## Task 2 – Product page grid with sticky details (`product.html`, `style.css`)
- `.product-layout` uses `display:grid` with named `grid-template-areas`. Below 642px: `"image" "details" "description"` (one column).
- `@media (min-width: 642px)`: `"image details" "description description"` – image and details side by side, description full width.
- Same media query: `.product-details { position: sticky; top: 112px; align-self: start; }`. `align-self:start` makes the box shorter than its grid row so it can stick. Description was made long (included pieces, fabric, care, shipping, size guide) so scrolling shows the effect.

## Task 3 – JavaScript live search and price sort (`script.js`)
- Search: on `input`, every card whose name doesn't contain the text (lower-cased) gets `.search-hidden` (`display:none`). Because the category filter also uses `display:none`, a card is shown only if it passes **both**.
- "No products found": after each search / radio change, if no card is visible the grid gets `hidden` and the message is shown; it disappears when cards match again.
- Sort: reads the price from each card (`"Rs. 5,990"` → `5990`), sorts, and moves the existing elements with `appendChild` (no `innerHTML`). Each click toggles low→high / high→low.
- Premium: on load, cards with price > 4200 (N × 100) get a `<span class="premium-badge">Premium</span>`.

## Quick changes for the live check
- Change BP: edit `@media (min-width: 642px)` in `style.css`.
- Sticky lower/higher: change `top: 112px` in `.product-details`.
- Columns in listing: change `row-cols-lg-4` in `index.html`.
- Accent: change `--accent` in `:root`.

## AI tools used
Claude (Anthropic).
