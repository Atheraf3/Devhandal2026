import { services } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import './Salon.css';

const Salon = () => {
  const salonServices = services.filter(s => s.category === 'salon');

  return (
    <div className="salon-page">
      <header className="page-header salon-header">
        <div className="container">
          <h1>Layanan Salon Kecantikan</h1>
          <p>Manjakan diri Anda dengan perawatan profesional dari kami.</p>
        </div>
      </header>

      <section className="services-list">
        <div className="container">
          <h2 className="section-title">Daftar Layanan</h2>
          <div className="services-grid">
            {salonServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="booking-info">
        <div className="container text-center">
          <div className="booking-card">
            <h2 className="section-title">Ingin Booking Jadwal?</h2>
            <p className="booking-desc">Pastikan Anda mendapatkan slot waktu terbaik. Hubungi kami minimal 1 hari sebelumnya.</p>
            <a href="https://wa.me/6285891137077" className="btn btn-primary whatsapp-link">
              <i className="fa-brands fa-whatsapp"></i> Chat Sekarang
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Salon;
