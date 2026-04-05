export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-col-brand">
            <div className="nav-brand" style={{ color: "#fff", marginBottom: "16px" }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.06 19.43 4 16.05 4 12C4 7.95 7.06 4.57 11 4.07V19.93ZM13 4.07C16.94 4.57 20 7.95 20 12C20 16.05 16.94 19.43 13 19.93V4.07Z" fill="currentColor" />
              </svg>
              CarePlus
            </div>
            <p style={{ color: "#cbd5e1", maxWidth: "400px", marginBottom: "24px" }}>
              Delivering trustworthy, compassionate, and high-end medical care to the elderly community since 2010.
            </p>
          </div>
          
          <div className="footer-col">
            <h4>Quick Links</h4>
            <a href="#about" className="footer-link">About Us</a>
            <a href="#services" className="footer-link">Our Services</a>
            <a href="#testimonials" className="footer-link">Testimonials</a>
            <a href="#booking" className="footer-link">Book Now</a>
          </div>

          <div className="footer-col">
            <h4>Contact Us</h4>
            <p style={{ color: "#cbd5e1", marginBottom: "12px" }}>03 Agricola <br/>Ibadan Oyo<br/>Nigeria</p>
            <p style={{ color: "#cbd5e1", marginBottom: "12px" }}>Phone: +234 8130259060</p>
            <p style={{ color: "#cbd5e1" }}>Email: care@careplusgeriatric.com</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} CarePlus Geriatric Services. All rights reserved. 
        </div>
      </div>
    </footer>
  );
}
