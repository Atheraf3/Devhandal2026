import './ServiceCard.css';

const ServiceCard = ({ service }) => {
  const handleBooking = () => {
    const message = `Halo, saya tertarik dengan layanan ${service.title}. Mohon informasi lebih lanjut.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6285891137077?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="service-card">
      <div className="service-icon-container">
        <i className={`fa-solid ${service.icon}`}></i>
      </div>
      <h3>{service.title}</h3>
      <p className="service-price">{service.price}</p>
      {service.duration && <p className="service-info"><i className="fa-regular fa-clock"></i> {service.duration}</p>}
      {service.size && <p className="service-info"><i className="fa-solid fa-ruler"></i> Ukuran: {service.size}</p>}
      <button className="booking-btn" onClick={handleBooking}>Booking</button>
    </div>
  );
};

export default ServiceCard;
