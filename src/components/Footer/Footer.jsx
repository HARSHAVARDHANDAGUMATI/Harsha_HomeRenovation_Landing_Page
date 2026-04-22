function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <strong>Ember Plate</strong>
          <p>Modern restaurant landing page crafted with responsive React components.</p>
        </div>
        <p>© {new Date().getFullYear()} Ember Plate. All rights reserved. Crafting unforgettable dining experiences.</p>
      </div>
    </footer>
  )
}

export default Footer
