import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiMoon, FiShoppingBag, FiSun, FiX } from 'react-icons/fi'
import useCart from '../../hooks/useCart'

const MotionDiv = motion.div

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Offers', href: '#offers' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { totalItems, toggleCart } = useCart()

  // Always default to light mode; only restore if user explicitly chose dark before
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('ep-theme') === 'dark'
  })

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.setAttribute('data-theme', 'dark')
      localStorage.setItem('ep-theme', 'dark')
    } else {
      root.removeAttribute('data-theme')
      localStorage.setItem('ep-theme', 'light')
    }
  }, [isDark])

  const handleLinkClick = () => setIsMenuOpen(false)

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a className="brand" href="#hero">
          <span className="brand__mark">EP</span>
          <span>
            Ember Plate
            <small>Signature dining experience</small>
          </span>
        </a>

        <nav className="navbar__links">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <a className="button button--ghost" href="#booking">
            Book a Table
          </a>

          {/* Dark mode toggle */}
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setIsDark((d) => !d)}
            aria-label="Toggle dark mode"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isDark ? (
                <MotionDiv
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                >
                  <FiSun />
                </MotionDiv>
              ) : (
                <MotionDiv
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                >
                  <FiMoon />
                </MotionDiv>
              )}
            </AnimatePresence>
          </button>

          <button
            type="button"
            className="cart-trigger"
            onClick={toggleCart}
            aria-label="Open cart"
          >
            <FiShoppingBag />
            <span>Cart</span>
            <strong>{totalItems}</strong>
          </button>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <MotionDiv
            className="mobile-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={handleLinkClick}>
                {link.label}
              </a>
            ))}
            <a href="#booking" onClick={handleLinkClick}>
              Reserve Now
            </a>
          </MotionDiv>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
