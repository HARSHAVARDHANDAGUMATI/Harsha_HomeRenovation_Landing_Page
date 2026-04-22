# 🍽️ Ember Plate — Restaurant Landing Page

<div align="center">

![Ember Plate Banner](https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80)

<br/>

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Zustand](https://img.shields.io/badge/Zustand-5-FF6B35?style=for-the-badge)](https://zustand-demo.pmnd.rs/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

**A premium, fully responsive restaurant landing page with an interactive menu, cart system, and table booking — built with React + Vite.**

[✨ Live Demo](#) · [🐛 Report Bug](https://github.com/issues) · [💡 Request Feature](https://github.com/issues)

</div>

---

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 About the Project

**Ember Plate** is a modern, high-fidelity restaurant landing page designed for a premium dining experience. It features smooth animations, a fully functional cart system, real-time fuzzy search, and a complete table booking flow — all built as a single-page application without any backend.

This project was crafted to demonstrate best practices in React component architecture, state management, and responsive UI design.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🧭 **Sticky Navbar** | Glassmorphic navbar that stays fixed while scrolling with backdrop blur |
| 🍛 **Interactive Menu** | Browse all dishes with category filters and real-time fuzzy search |
| 🛒 **Cart System** | Add/remove items, adjust quantities, view totals in a slide-out drawer |
| 📅 **Table Booking** | Full booking form with validation via React Hook Form |
| 🎞️ **Smooth Animations** | Page-wide motion effects powered by Framer Motion |
| 📱 **Fully Responsive** | Optimized for mobile, tablet, and desktop viewports |
| 🌇 **Premium UI** | Glassmorphism, custom color palette, Playfair Display typography |
| 🔔 **Toast Notifications** | Instant feedback on cart actions via React Hot Toast |

---

## 🛠️ Tech Stack

### Core
- **[React 19](https://react.dev/)** — UI component library
- **[Vite 8](https://vitejs.dev/)** — Lightning-fast build tool and dev server
- **[React Router DOM v7](https://reactrouter.com/)** — Client-side routing

### State & Data
- **[Zustand v5](https://zustand-demo.pmnd.rs/)** — Lightweight global state management for the cart
- **[Fuse.js](https://www.fusejs.io/)** — Fuzzy search for the menu
- **[React Hook Form](https://react-hook-form.com/)** — Performant form validation

### UI & Animation
- **[Framer Motion](https://www.framer.com/motion/)** — Declarative animations and transitions
- **[React Icons](https://react-icons.github.io/react-icons/)** — Icon library (Feather Icons)
- **[React Hot Toast](https://react-hot-toast.com/)** — Toast notification system
- **Vanilla CSS** — Custom design system with CSS variables, no utility framework

### Dev Tools
- **[ESLint](https://eslint.org/)** — Code linting
- **[PostCSS](https://postcss.org/)** + **[Autoprefixer](https://autoprefixer.github.io/)** — CSS processing

---

## 📁 Project Structure

```
restaurant-landing-page/
├── public/                    # Static assets
├── src/
│   ├── assets/                # Images and media
│   ├── components/            # Reusable UI components
│   │   ├── About/             # About section
│   │   ├── BookingForm/       # Table reservation form
│   │   ├── Cart/              # Cart drawer & cart item
│   │   ├── Contact/           # Contact section
│   │   ├── Footer/            # Footer
│   │   ├── Hero/              # Hero / landing section
│   │   ├── Menu/              # Menu grid, cards, filters
│   │   ├── Navbar/            # Sticky navigation bar
│   │   ├── Offers/            # Offers / promotions
│   │   └── Reviews/           # Customer reviews
│   ├── data/
│   │   └── menuData.js        # All menu items, categories, static data
│   ├── hooks/
│   │   └── useCart.js         # Cart hook (Zustand store wrapper)
│   ├── store/                 # Zustand store definitions
│   ├── utils/
│   │   └── formatCurrency.js  # Currency formatting helper
│   ├── App.css                # Global design system & component styles
│   ├── App.jsx                # Root application component
│   ├── index.css              # Base resets
│   └── main.jsx               # React entry point
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js v18+** and **npm** installed:

```bash
node -v   # Should be v18 or higher
npm -v
```

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/restaurant-landing-page.git
cd restaurant-landing-page
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the development server:**

```bash
npm run dev
```

4. **Open in browser:**

```
http://localhost:5173
```

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server with HMR |
| `npm run build` | Build the project for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check for code issues |

---

## 📸 Screenshots

| Section | Preview |
|---|---|
| **Hero** | Full-screen landing with floating info cards |
| **Menu** | 3-column grid with category filters & fuzzy search |
| **Cart** | Slide-out drawer with quantity controls |
| **Booking** | Validated table reservation form |
| **Reviews** | Customer testimonials |

> 📌 *Add your own screenshots by replacing the table above with `![Screenshot](./screenshot.png)` after uploading images to the repo.*

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'feat: add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

Made with ❤️ by **Harsha**

⭐ If you found this project helpful, please consider giving it a **star** on GitHub!

</div>
