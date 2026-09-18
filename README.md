# Chandra-Restaurant
echo "# Chandra-Restaurant" >> README.md
git init
# Chandra Restaurant

A responsive static restaurant website built with HTML, CSS, and vanilla JavaScript.

## Features

- Responsive restaurant landing page
- Navigation links for Home, About, Menu, Gallery, and Contact
- Restaurant menu and gallery image sections
- Smooth in-page navigation
- Active navigation state while scrolling
- Automatically updated copyright year
- Keyboard-friendly focus styles

## Project Structure

```text
Chandra Restaurant/
|-- index.html
|-- css/
|   `-- style.css
|-- js/
|   `-- script.js
|-- Images/
|   |-- hero_restaurant.jpg
|   |-- pasta.jpg
|   |-- burger.png
|   |-- pizza.jpg
|   |-- chicken-fry.jpg
|   |-- chow-mein.jpg
|   `-- restaurant-*.jpg
`-- README.md
```

## Run Locally

No build tools or dependencies are required.

1. Open `index.html` directly in a browser, or use the VS Code Live Server extension.
2. Keep the `css`, `js`, and `Images` folders beside `index.html` so relative paths continue to work.

## Notes

This is currently a frontend-only project. The menu is informational, and the Order Now link takes visitors to the menu section. A real order form, online payments, or database-backed reservations would require a backend service.
