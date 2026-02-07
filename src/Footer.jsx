import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">

        {/* عن المتجر */}
        <div className="footer-about">
          <div className="footer-logo">
            ISSA<span>Shop</span>
          </div>
          <p>
            We provide quality products at competitive prices with excellent customer service.
          </p>
        </div>


<div className="social-links">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <Facebook size={20} />
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <Twitter size={20} />
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    <Linkedin size={20} />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <Instagram size={20} />
  </a>
</div>
        {/* روابط سريعة */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* معلومات الاتصال */}
        <div className="footer-contact">
          <h3>Contact Info</h3>
          <p>📍 Wittekindstr.</p>
          <p>📞 015214429933</p>
          <p>✉️ ihammadi53@gmail.com</p>
        </div>

      </div>


      {/* حقوق الملكية */}
      <div className="copyright">
        © 2025 ISSA Shop. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
