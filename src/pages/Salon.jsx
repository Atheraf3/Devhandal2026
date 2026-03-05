import { services } from '../data/services';
import ServiceCard from '../components/ServiceCard';

const Salon = () => {
  const salonServices = services.filter(s => s.category === 'salon');

  return (
    <div className="salon-page">
      <header className="page-header" style={{ backgroundColor: '#FF69B4' }}>
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
          <div style={{ backgroundColor: 'white', padding: '60px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <h2 className="section-title">Ingin Booking Jadwal?</h2>
            <p style={{ marginBottom: '30px', fontSize: '1.1rem' }}>Pastikan Anda mendapatkan slot waktu terbaik. Hubungi kami minimal 1 hari sebelumnya.</p>
            <a href="https://wa.me/6285891137077" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
              <i className="fa-brands fa-whatsapp"></i> Chat Sekarang
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Salon;
