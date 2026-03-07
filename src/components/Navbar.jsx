import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <img src="/src/assets/images/logoNew.png" alt="Salon Logo" className="logo-img" />
          <span>Salon & Sewa Baju</span>
        </Link>
        <ul className="nav-menu">
          <li><Link to="/">Beranda</Link></li>
          <li><Link to="/katalog">Katalog Sewa</Link></li>
          <li><Link to="/salon">Layanan Salon</Link></li>
          <li><Link to="/kontak">Kontak</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
