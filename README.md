# Paradise Nursery 🌿

Paradise Nursery is a responsive plant-shop demo built with React, Vite, and Redux Toolkit. Browse indoor plants, add them to your shopping cart, change quantities, and view the order total.

## Features
- Landing page with a “Get Started” button
- Product catalog grouped into three categories
- Six unique plants per category (18 products total)
- Add-to-cart controls and a live cart item count
- Redux Toolkit cart slice with `addItem()`, `removeItem()`, and `updateQuantity()`
- Quantity controls, item removal, subtotal, and order total
- Responsive layout for desktop and mobile
- Checkout placeholder message

## Tech stack
- React
- Vite
- Redux Toolkit and React Redux
- CSS
- Lucide React icons

## Run locally
Install Node.js (LTS), then run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Main project files
- `src/App.jsx` — page layout and navigation
- `src/App.css` — landing background and application styles
- `src/AboutUs.jsx` — company information
- `src/CartSlice.jsx` — cart reducers
- `src/ProductList.jsx` — categorized product listing
- `src/CartItem.jsx` — shopping cart page
- `src/store.js` — Redux store configuration

## Notes
This is a learning project. Product images are loaded from Unsplash URLs and checkout is a demonstration only; no real payment is processed.
