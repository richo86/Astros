// Copyright (c) Isis Astros. All rights reserved.

/**
 * Home page component featuring a fullscreen image carousel
 * and sections describing electrical services offered.
 */
import { useState, useRef, useEffect } from 'react';
import { Box, styled, Fab } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Carousel } from '../components/Carousel';
import { Nosotros } from '../components/Nosotros';
import { Servicios } from '../components/Servicios';
import { Productos } from '../components/Productos';
import { ProductosVenezuela } from '../components/Productos-Venezuela';
import { Contacto } from '../components/Contacto';
import { ContactoVenezuela } from '../components/Contacto-Venezuela';
import Footer from '../components/Footer';
import { useLocation } from '../contexts/LocationContext';

const ContentSection = styled('div')({
  position: 'relative',
  zIndex: 1,
  marginTop: '100vh',
  background: 'linear-gradient(to bottom, rgba(249, 250, 251, 0.8), rgba(249, 250, 251, 1) 200px)',
  backdropFilter: 'blur(10px)',
  '& > .MuiContainer-root': {
    position: 'relative',
    zIndex: 2
  }
});

function Home() {
  const [shouldFadeOut, setShouldFadeOut] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const { selectedCountry, initialCountryLoading } = useLocation();

  const images = [
    'https://group.met.com/media/omvoe0f3/electricity.jpg?anchor=center&mode=crop&width=1920&rnd=133293326643000000&mode=max&upscale=false',
    'https://brainboxai.com/hs-fs/hubfs/Imported_Blog_Media/header_articles_%2811%29-2.png?width=2000&height=1200&name=header_articles_%2811%29-2.png',
    'https://www.popsci.com/wp-content/uploads/2023/06/16/how-does-electricity-work-high-voltage-wires-china.jpg?strip=all&quality=85',
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          setShouldFadeOut(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Box sx={{ minHeight: '200vh', paddingTop: '5rem' }}>
      <Carousel images={images} shouldFadeOut={shouldFadeOut} />

      <ContentSection ref={contentRef}>
          <Box id="servicios"><Servicios /></Box>

          <Box id="nosotros"><Nosotros /></Box>

          <Box id="productos">
            {initialCountryLoading || selectedCountry !== 'Venezuela' ? <Productos /> : <ProductosVenezuela />}
          </Box>

          <Box id="contacto">
            {initialCountryLoading || selectedCountry !== 'Venezuela' ? <Contacto /> : <ContactoVenezuela />}
          </Box>

        <Footer />
      </ContentSection>
      <Fab
        color="success"
        aria-label="whatsapp"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 1000
        }}
        onClick={() => window.open('https://wa.me/YOUR_PHONE_NUMBER', '_blank')}
      >
        <WhatsAppIcon />
      </Fab>
    </Box>
  );
}

export default Home;
