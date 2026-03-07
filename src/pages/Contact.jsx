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
                  <p>
                    Perum Bermis, Jalan Rambutan Blok B No.127 RT03/RW05,
                    Kutajaya, Pasar Kemis.
                  </p>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.918895626487!2d106.5552626075049!3d-6.170597626989809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ff82f81a57cf%3A0x50812d172e20a85!2sSalon%20wanita%20%26%20Tata%20rias%20Perum%20Bermis!5e0!3m2!1sid!2sid!4v1772868103569!5m2!1sid!2sid"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen=""
                loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
