export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-brand">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.06 19.43 4 16.05 4 12C4 7.95 7.06 4.57 11 4.07V19.93ZM13 4.07C16.94 4.57 20 7.95 20 12C20 16.05 16.94 19.43 13 19.93V4.07Z" fill="currentColor" />
          </svg>
          CarePlus
        </div>
        <ul className="nav-links">
          <li><a href="#about" className="nav-link">About Doctor</a></li>
          <li><a href="#services" className="nav-link">Services</a></li>
          <li><a href="#testimonials" className="nav-link">Testimonials</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
        <a href="#booking" className="btn btn-primary" style={{ padding: "10px 20px", fontSize: "1rem" }}>
          Book Appointment
        </a>
      </div>
    </nav>
  );
}
