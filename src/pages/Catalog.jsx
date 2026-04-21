import { gallery } from '../data/gallery';
import { services } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import './Catalog.css';

const Catalog = () => {
  const sewaServices = services.filter(s => s.category === 'sewa');

  return (
    <div className="catalog-page">
      <header className="page-header">
        <div className="container">
          <h1>Katalog Sewa Baju Adat</h1>
          <p>Temukan koleksi baju adat terbaik untuk momen spesial Anda.</p>
        </div>
      </header>

      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title">Galeri</h2>
          <div className="gallery-grid">
            {gallery.map(item => (
              <div key={item.id} className="gallery-item">
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="gallery-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-section">
        <div className="container">
          <h2 className="section-title">Pilihan Sewa</h2>
          <div className="services-grid">
            {sewaServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
  
    </div>
  );
};

export default Catalog;
