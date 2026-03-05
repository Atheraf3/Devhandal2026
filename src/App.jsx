import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppBtn from './components/WhatsAppBtn';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Salon from './pages/Salon';
import Contact from './pages/Contact';
import './assets/styles/global.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/katalog" element={<Catalog />} />
            <Route path="/salon" element={<Salon />} />
            <Route path="/kontak" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppBtn />
      </div>
    </Router>
  );
}

export default App;
