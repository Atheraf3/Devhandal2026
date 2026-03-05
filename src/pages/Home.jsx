import { Link } from 'react-router-dom';
import { services } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import './Home.css';

const Home = () => {
  const featuredServices = services.filter(s => s.id <= 4);

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>Tampil Cantik Paripurna & Anggun Berbudaya</h1>
            <p>Salon kecantikan dan sewa baju adat Kartinian terlengkap untuk momen spesial Anda.</p>
            <div className="hero-btns">
              <Link to="/katalog" className="btn btn-primary">Sewa Baju Adat</Link>
              <Link to="/salon" className="btn btn-secondary">Layanan Salon</Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="/aset/jawa.png" alt="Baju Adat" />
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Mengapa Memilih Kami?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <i className="fa-solid fa-award"></i>
              <h3>Berpengalaman</h3>
              <p>Tenaga ahli profesional untuk hasil make-up dan perawatan rambut terbaik.</p>
            </div>
            <div className="feature-card">
              <i className="fa-solid fa-heart"></i>
              <h3>Koleksi Bersih</h3>
              <p>Baju adat selalu dalam kondisi bersih, harum, dan terawat dengan baik.</p>
            </div>
            <div className="feature-card">
              <i className="fa-solid fa-coins"></i>
              <h3>Harga Ramah</h3>
              <p>Kualitas premium dengan harga yang tetap terjangkau untuk semua kalangan.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-services">
        <div className="container">
          <h2 className="section-title">Layanan Unggulan</h2>
          <div className="services-grid">
            {featuredServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link to="/salon" className="btn btn-outline">Lihat Semua Layanan</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
