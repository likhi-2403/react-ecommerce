import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h2>🛒 React Store</h2>

          <p>
            Your one-stop shop for quality products at the best prices.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <p>Home</p>
          <p>Cart</p>
          <p>Login</p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p>support@reactstore.com</p>

          <p>+91 9876543210</p>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 React Store | Developed by <strong>Likhitha Doddi</strong>
      </p>

    </footer>
  );
}

export default Footer;