import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageTitles = {
  '/': 'Beranda | Salon & Sewa Baju Adat',
  '/katalog': 'Katalog Sewa | Salon & Sewa Baju Adat',
  '/salon': 'Layanan Salon | Salon & Sewa Baju Adat',
  '/kontak': 'Kontak | Salon & Sewa Baju Adat'
};

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const defaultTitle = 'Salon & Sewa Baju Adat Kartinian';
    const currentTitle = pageTitles[location.pathname] || defaultTitle;
    document.title = currentTitle;
  }, [location]);

  return null;
};

export default DynamicTitle;
