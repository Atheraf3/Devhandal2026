import { useState } from 'react';

function App() {
  // Data layanan
    const services = [
        {
        id: 1,
        icon: 'fa-scissors',
        title: 'Potong Rambut',
        price: 'Rp 25.000 - Rp 50.000',
        },
        {
        id: 2,
        icon: 'fa-spa',
        title: 'Smoothing',
        price: 'Rp 200.000 - Rp 500.000',
        },
        {
        id: 3,
        icon: 'fa-paint-brush',
        title: 'Bonding',
        price: 'Rp 150.000 - Rp 400.000',
        },
        {
        id: 4,
        icon: 'fa-wind',
        title: 'Keriting',
        price: 'Rp 180.000 - Rp 450.000',
        },
        {
        id: 5,
        icon: 'fa-shower',
        title: 'Creambath',
        price: 'Rp 50.000 - Rp 100.000',
        },
        {
        id: 6,
        icon: 'fa-face-smile',
        title: 'Rias Wajah',
        price: 'Rp 150.000 - Rp 300.000',
        },
        {
        id: 7,
        icon: 'fa-shirt',
        title: 'Sewa Baju Adat Kartinian (Anak)',
        price: 'Rp 50.000 - Rp 100.000',
        },
        {
        id: 8,
        icon: 'fa-user-tie',
        title: 'Sewa Baju Adat Kartinian (Dewasa)',
        price: 'Rp 100.000 - Rp 200.000',
        },
    ];

    // Scroll to services section
    const scrollToServices = () => {
        document.getElementById('layanan').scrollIntoView({ behavior: 'smooth' });
    };

    // Styles
    const styles = {
        body: {
        margin: 0,
        padding: 0,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        backgroundColor: '#FFF0F5',
        color: '#2C3E50',
        },
        container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        },
        // Hero Section
        hero: {
        textAlign: 'center',
        padding: '80px 20px',
        backgroundColor: '#FFFFFF',
        borderRadius: '8px',
        marginBottom: '40px',
        },
        heroTitle: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#4B0082',
        marginBottom: '20px',
        lineHeight: '1.2',
        },
        heroSubtitle: {
        fontSize: '1.2rem',
        color: '#2C3E50',
        marginBottom: '30px',
        },
        ctaButton: {
        backgroundColor: '#4B0082',
        color: '#FFFFFF',
        border: 'none',
        padding: '15px 40px',
        fontSize: '1.1rem',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: '600',
        transition: 'opacity 0.3s',
        },
        // Why Choose Us Section
        whySection: {
        padding: '60px 20px',
        textAlign: 'center',
        },
        sectionTitle: {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#4B0082',
        marginBottom: '50px',
        },
        whyGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '30px',
        maxWidth: '900px',
        margin: '0 auto',
        },
        whyCard: {
        backgroundColor: '#FFFFFF',
        padding: '40px 20px',
        borderRadius: '8px',
        textAlign: 'center',
        },
        whyIcon: {
        fontSize: '3rem',
        color: '#4B0082',
        marginBottom: '20px',
        },
        whyTitle: {
        fontSize: '1.3rem',
        fontWeight: '600',
        color: '#2C3E50',
        },
        // Services Section
        servicesSection: {
        padding: '60px 20px',
        textAlign: 'center',
        },
        servicesGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '25px',
        marginTop: '40px',
        },
        serviceCard: {
        backgroundColor: '#FFFFFF',
        padding: '30px 20px',
        borderRadius: '8px',
        textAlign: 'center',
        transition: 'transform 0.3s',
        },
        serviceIcon: {
        fontSize: '2.5rem',
        color: '#4B0082',
        marginBottom: '15px',
        },
        serviceTitle: {
        fontSize: '1.2rem',
        fontWeight: '600',
        color: '#2C3E50',
        marginBottom: '10px',
        },
        servicePrice: {
        fontSize: '1rem',
        color: '#666',
        marginBottom: '20px',
        },
        detailButton: {
        backgroundColor: '#4B0082',
        color: '#FFFFFF',
        border: 'none',
        padding: '10px 25px',
        fontSize: '0.95rem',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: '500',
        transition: 'opacity 0.3s',
        },
        // CTA Section
        ctaSection: {
        padding: '80px 20px',
        textAlign: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: '8px',
        margin: '40px 0',
        },
        ctaSectionTitle: {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#4B0082',
        marginBottom: '30px',
        },
        whatsappButton: {
        backgroundColor: '#25D366',
        color: '#FFFFFF',
        border: 'none',
        padding: '20px 50px',
        fontSize: '1.3rem',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: '600',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '15px',
        textDecoration: 'none',
        transition: 'opacity 0.3s',
        },
        whatsappIcon: {
        fontSize: '1.5rem',
        },
        // Footer
        footer: {
        textAlign: 'center',
        padding: '30px 20px',
        color: '#2C3E50',
        fontSize: '0.9rem',
        },
    };

    const handleDetailClick = (serviceName) => {
        const message = `Halo, saya tertarik dengan layanan ${serviceName}. Mohon informasi lebih lanjut.`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/6285891137077?text=${encodedMessage}`, '_blank');
    };

    return (
        <div style={styles.body}>
        <div style={styles.container}>
            {/* Hero Section */}
            <section style={styles.hero}>
            <h1 style={styles.heroTitle}>
                Tampil Cantik Paripurna & Anggun Berbudaya
            </h1>
            <p style={styles.heroSubtitle}>
                Salon kecantikan dan sewa baju adat Kartinian terlengkap.
            </p>
            <button
                style={styles.ctaButton}
                onClick={scrollToServices}
                onMouseEnter={(e) => (e.target.style.opacity = '0.8')}
                onMouseLeave={(e) => (e.target.style.opacity = '1')}
            >
                Lihat Layanan
            </button>
            </section>

            {/* Why Choose Us Section */}
            <section style={styles.whySection}>
            <h2 style={styles.sectionTitle}>Mengapa Memilih Kami?</h2>
            <div style={styles.whyGrid}>
                <div style={styles.whyCard}>
                <i className="fa-solid fa-user-tie" style={styles.whyIcon}></i>
                <h3 style={styles.whyTitle}>Berpengalaman</h3>
                </div>
                <div style={styles.whyCard}>
                <i className="fa-solid fa-tag" style={styles.whyIcon}></i>
                <h3 style={styles.whyTitle}>Harga Ramah</h3>
                </div>
                <div style={styles.whyCard}>
                <i className="fa-solid fa-shirt" style={styles.whyIcon}></i>
                <h3 style={styles.whyTitle}>Koleksi Bersih & Lengkap</h3>
                </div>
            </div>
            </section>

            {/* Services Section */}
            <section id="layanan" style={styles.servicesSection}>
            <h2 style={styles.sectionTitle}>Daftar Layanan & Harga</h2>
            <div style={styles.servicesGrid}>
                {services.map((service) => (
                <div
                    key={service.id}
                    style={styles.serviceCard}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                    <i className={`fa-solid ${service.icon}`} style={styles.serviceIcon}></i>
                    <h3 style={styles.serviceTitle}>{service.title}</h3>
                    <p style={styles.servicePrice}>{service.price}</p>
                    <button
                    style={styles.detailButton}
                    onClick={() => handleDetailClick(service.title)}
                    onMouseEnter={(e) => (e.target.style.opacity = '0.8')}
                    onMouseLeave={(e) => (e.target.style.opacity = '1')}
                    >
                    Detail
                    </button>
                </div>
                ))}
            </div>
            </section>

            {/* CTA Section */}
            <section style={styles.ctaSection}>
            <h2 style={styles.ctaSectionTitle}>Booking Sekarang</h2>
            <a
                href="https://wa.me/6285891137077"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.whatsappButton}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
                <i className="fa-brands fa-whatsapp" style={styles.whatsappIcon}></i>
                Obrolan Pemilik di WhatsApps
            </a>
            </section>

            {/* Footer */}
            <footer style={styles.footer}>
            <p>&copy; {new Date().getFullYear()} Salon & Sewa Baju Adat Kartinian. Semua Hak Cipta Dilindungi.</p>
            </footer>
        </div>
        </div>
    );
}

export default App;
