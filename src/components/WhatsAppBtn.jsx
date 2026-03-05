import './WhatsAppBtn.css';

const WhatsAppBtn = () => {
  return (
    <a
      href="https://wa.me/6285891137077"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn-floating"
      title="Hubungi Kami"
    >
      <i className="fa-brands fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppBtn;
