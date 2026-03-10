import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img src="https://ik.imagekit.io/2xthk8ud4/Salon/logoNew.png" alt="Salon Logo" className="logo-img" />
          <span>Salon & Sewa Baju</span>
        </Link>
        
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={isMobileMenuOpen ? "nav-menu nav-active" : "nav-menu"}>
          <li><Link to="/" onClick={closeMenu}>Beranda</Link></li>
          <li><Link to="/katalog" onClick={closeMenu}>Katalog Sewa</Link></li>
          <li><Link to="/salon" onClick={closeMenu}>Layanan Salon</Link></li>
          <li><Link to="/kontak" onClick={closeMenu}>Kontak</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
