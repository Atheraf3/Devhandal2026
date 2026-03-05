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
          <h2 className="section-title">Galeri Real-Work</h2>
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
      
      <section className="size-guide">
        <div className="container">
          <div className="guide-box">
            <h2 className="section-title">Panduan Ukuran</h2>
            <div className="guide-content">
              <div className="guide-table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Ukuran</th>
                      <th>Lingkar Dada</th>
                      <th>Lingkar Pinggang</th>
                      <th>Saran Umur (Anak)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>S</td>
                      <td>80 cm</td>
                      <td>70 cm</td>
                      <td>3-5 Tahun</td>
                    </tr>
                    <tr>
                      <td>M</td>
                      <td>85 cm</td>
                      <td>75 cm</td>
                      <td>6-8 Tahun</td>
                    </tr>
                    <tr>
                      <td>L</td>
                      <td>90 cm</td>
                      <td>80 cm</td>
                      <td>9-11 Tahun</td>
                    </tr>
                    <tr>
                      <td>XL</td>
                      <td>95 cm</td>
                      <td>85 cm</td>
                      <td>12-14 Tahun</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="guide-note">*Ukuran dapat bervariasi tergantung jenis baju adat. Hubungi kami untuk konsultasi lebih lanjut.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catalog;
