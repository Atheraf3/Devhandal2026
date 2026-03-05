const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#2C3E50', color: 'white', padding: '40px 0', marginTop: '60px' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
        <div>
          <h3 style={{ color: 'white', marginBottom: '20px' }}>Salon & Sewa Baju Adat</h3>
          <p>Tampil Cantik Paripurna & Anggun Berbudaya bersama kami.</p>
        </div>
        <div>
          <h4 style={{ color: 'white', marginBottom: '20px' }}>Kontak Kami</h4>
          <p>WhatsApp: +62 858-9113-7077</p>
          <p>Lokasi: Perum. Pesona Mutiara Citayam Blok B No.1</p>
        </div>
        <div>
          <h4 style={{ color: 'white', marginBottom: '20px' }}>Jam Operasional</h4>
          <p>Setiap Hari: 08.00 - 20.00 WIB</p>
        </div>
      </div>
      <div className="container" style={{ textAlign: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <p>&copy; {new Date().getFullYear()} Salon & Sewa Baju Adat Kartinian. Semua Hak Cipta Dilindungi.</p>
      </div>
    </footer>
  );
};

export default Footer;
