# Ember Plate - Restaurant Landing Page

A modern, responsive, and interactive restaurant landing page built with React and Vite. The project is designed to showcase a premium dining brand through polished UI, smooth animations, menu browsing, cart interactions, and a clean booking experience.

## Overview

Ember Plate is a frontend-focused single-page application created for portfolio and GitHub presentation. It combines a refined visual theme with practical restaurant features such as menu filtering, fuzzy search, cart total calculation, customer reviews, promotional offers, and a reservation form UI.

## Key Features

- Premium landing page design with a clean white theme, soft gradients, glassmorphism, and elegant typography
- Fully responsive layout for desktop, tablet, and mobile screens
- Sticky navigation with smooth anchor scrolling
- Hero, About, Menu, Offers, Reviews, Booking, Contact, and Footer sections
- Interactive menu with category filters and fuzzy search using `Fuse.js`
- Cart drawer with add, remove, increment, decrement, and total price calculation
- Reservation form UI with validation using `react-hook-form`
- Smooth section and card animations using `framer-motion`
- Toast feedback for user actions with `react-hot-toast`
- Reusable component-based architecture for easier maintenance

## Tech Stack

- `React 19`
- `Vite 8`
- `Framer Motion`
- `Zustand`
- `Fuse.js`
- `React Hook Form`
- `React Icons`
- `React Hot Toast`
- `ESLint`
- Custom CSS

## Project Structure

```text
restaurant-landing-page/
|-- public/
|-- src/
|   |-- components/
|   |   |-- About/
|   |   |-- BookingForm/
|   |   |-- Cart/
|   |   |-- Contact/
|   |   |-- Footer/
|   |   |-- Hero/
|   |   |-- Menu/
|   |   |-- Navbar/
|   |   |-- Offers/
|   |   `-- Reviews/
|   |-- data/
|   |   `-- menuData.js
|   |-- hooks/
|   |   `-- useCart.js
|   |-- pages/
|   |   |-- Home.jsx
|   |   |-- MenuPage.jsx
|   |   `-- NotFound.jsx
|   |-- store/
|   |   `-- useCartStore.js
|   |-- utils/
|   |   |-- filterMenu.js
|   |   `-- formatCurrency.js
|   |-- App.css
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- index.html
|-- package.json
`-- README.md
```

## Getting Started

### Prerequisites

- Node.js 18 or above
- npm

### Installation

```bash
git clone https://github.com/your-username/restaurant-landing-page.git
cd restaurant-landing-page
npm install
```

### Run Locally

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

## Available Scripts

- `npm run dev` - starts the development server
- `npm run build` - creates the production build
- `npm run preview` - previews the production build locally
- `npm run lint` - runs ESLint checks

## UI Sections

- Hero section with strong first impression and call-to-action buttons
- About section for brand storytelling
- Menu section with filtering and search
- Offers section for promotions
- Reviews section for social proof
- Booking section with table reservation UI
- Contact section with restaurant details
- Cart drawer for order summary and pricing

## Highlights For Recruiters And Reviewers

- Clear separation of concerns between data, store, hooks, utilities, and UI components
- Responsive and scalable component structure
- Practical frontend features beyond static design
- Clean code intended for GitHub review and portfolio use

## Deployment

You can deploy this project easily on:

- Vercel
- Netlify

After deployment, replace the placeholders below:

- GitHub repository: `https://github.com/your-username/restaurant-landing-page`
- Live demo: `https://your-deployment-link.vercel.app`

## Future Improvements

- Backend integration for table reservations
- Real checkout flow and payment integration
- Admin dashboard for menu management
- Dark/light theme toggle
- API-driven menu content

## Author

Built by Harsha.

If you use this project in your portfolio, make sure to update the repository and live demo links with your final URLs.
