import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <header className="page-header">
        <div className="container">
          <h1>Hubungi Kami</h1>
          <p>Kami siap membantu Anda mendapatkan penampilan terbaik.</p>
        </div>
      </header>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-card">
              <h2>Informasi Kontak</h2>
              <div className="info-item">
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h3>Alamat</h3>
                  <p>Perum. Pesona Mutiara Citayam Blok B No.1</p>
                </div>
              </div>
              <div className="info-item">
                <i className="fa-brands fa-whatsapp"></i>
                <div>
                  <h3>WhatsApp</h3>
                  <p>+62 858-9113-7077</p>
                </div>
              </div>
              <div className="info-item">
                <i className="fa-regular fa-clock"></i>
                <div>
                  <h3>Jam Operasional</h3>
                  <p>Setiap Hari: 08.00 - 20.00 WIB</p>
                </div>
              </div>
            </div>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.831885474665!2d106.7909!3d-6.415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjQnNTQuMCJTIDEwNsKwNDcnMjcuMiJF!5e0!3m2!1sid!2sid!4v1620000000000!5m2!1sid!2sid" 
                width="100%" 
                height="450" 
                style={{ border: 0, borderRadius: '12px' }} 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
