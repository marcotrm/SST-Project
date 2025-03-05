import React from "react";
import "../css/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            We are committed to providing the best flight experience for all
            travelers.
          </p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: contact@travelsite.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <i className="fa-brands fa-facebook"></i> Facebook
            </a>
            <a href="#" className="social-icon">
              <i className="fa-brands fa-instagram"></i> Instagram
            </a>
            <a href="#" className="social-icon">
              <i className="fa-brands fa-twitter"></i> Twitter
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 TravelSite. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
