// Copyright (c) Isis Astros. All rights reserved.

/**
 * Home page component featuring a fullscreen image carousel
 * and sections describing electrical services offered.
 */
import { useState, useRef, useEffect } from 'react';
import { Box, styled, Fab } from '@mui/material';
import { GlobalStyles } from '@mui/material';
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
import img1 from '../assets/images/banner-astros-1.jpg';
import img3 from '../assets/images/banner-astros-3.jpg';
import img4 from '../assets/images/banner-astros-4.jpg';
import img5 from '../assets/images/banner-astros-5.jpg';



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
    img1,
    img3,
    img4,
    img5
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
  const [shouldShowCarousel, setShouldShowCarousel] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShouldShowCarousel(window.scrollY < 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <GlobalStyles styles={{
        '@keyframes pulse': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.18)' },
          '100%': { transform: 'scale(1)' }
        }
      }} />
      <Box sx={{ minHeight: '200vh', paddingTop: '5rem' }}>
        {shouldShowCarousel && <Carousel images={images} shouldFadeOut={false} />}

        <ContentSection ref={contentRef}>
            <Box id="productos">
              {initialCountryLoading || selectedCountry !== 'Venezuela' ? <Productos /> : <ProductosVenezuela />}
            </Box>

            <Box id="servicios"><Servicios /></Box>

            <Box id="nosotros"><Nosotros /></Box>

            <Box id="contacto">
              {initialCountryLoading || selectedCountry !== 'Venezuela' ? <Contacto /> : <ContactoVenezuela />}
            </Box>

          <Footer />
        </ContentSection>
        <Fab
          aria-label="whatsapp"
          sx={{
            position: 'fixed',
            bottom: 40,
            right: 40,
            zIndex: 1000,
            width: 70,
            height: 70,
            backgroundColor: '#1DAA61',
            boxShadow: 6,
            '&:hover': {
              backgroundColor: '#168f4e',
            }
          }}
          onClick={() => window.open('https://wa.me/3002640220', '_blank')}
        >
          <WhatsAppIcon sx={{ color: '#fff', fontSize: 30, animation: 'pulse 1.2s infinite' }} />
        </Fab>
      </Box>
    </>
  );
}

export default Home;
