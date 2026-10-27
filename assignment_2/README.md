# Assignment 2 — E-commerce Site: Static, Responsive Pages

A static, responsive front page and product page for an online clothing store, modeled on **Sapphire** (Pakistani fashion brand). Built with **HTML5, Bootstrap 5.3 and a small custom stylesheet**. There is no JavaScript in this assignment.

## Reference Site

| | |
|---|---|
| **Name** | Sapphire |
| **URL** | https://pk.sapphireonline.pk/ |
| **Page modeled** | "Sale" listing page and a product detail page |

**Reference screenshot:**

![Reference site screenshot - Sapphire](reference-screenshot.png)

> Add your own screenshot of the Sapphire site, saved as `reference-screenshot.png` in this folder, so the image above displays.

## Pages

| File | Description |
|---|---|
| `index.html` | Homepage / product listing: header (logo, nav bar, cart icon), responsive grid of 12 product cards (image, name, price, Add to Cart button), footer |
| `product.html` | Product detail: large image, name, price, description, quantity selector, Add to Cart button, same header and footer |

## Folder Structure

```
assignment-2/
├── index.html
├── product.html
├── README.md
├── Assignment-2-Completion.docx
├── css/
│   ├── bootstrap.min.css   (Bootstrap 5.3.3, local copy)
│   └── style.css           (custom styles)
├── images/                 (product photos)
└── screenshots/            (375px / 768px / 1280px captures of both pages)
```

## How Bootstrap Is Used

- **Grid:** the product listing uses `row row-cols-2 row-cols-md-3 row-cols-lg-4` (2 → 3 → 4 columns). The product page uses `col-12 col-md-6` (stacked → side by side).
- **Navbar:** the main navigation uses `navbar` / `navbar-nav` / `nav-link` with flex utilities.
- **Components and utilities:** `card`, `btn`, `form-control`, `container`, and the flex/spacing utilities (`d-flex`, `justify-content-between`, `g-3`, `py-4`, …).
- **Sticky footer:** `d-flex flex-column min-vh-100` on `<body>` with `mt-auto` on the footer.
- **No table layout and no absolute positioning.** Everything uses Flexbox and Grid via Bootstrap.

## Responsive Behavior

| Width | Product grid | Product page |
|---|---|---|
| ~375px (phone) | 2 columns | Image above details, full-width button |
| ~768px (tablet) | 3 columns | Image and details side by side |
| ≥1200px (desktop) | 4 columns | Image and details side by side |

## How to Run

Open `index.html` in any browser. No build step or server is required.
