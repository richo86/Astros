// @ts-check
/**
 * @fileoverview Component that displays company information with a fixed background effect.
 * @module components/Nosotros
 * @copyright (c) 2024 Isis Astros. All rights reserved.
 */

import { Typography, Grid, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useRef, useState } from 'react';

interface VisibilityProps {
  readonly isVisible: boolean;
}

const NosotrosSection = styled('section')<VisibilityProps>(() => ({
  position: 'relative',
  minHeight: '100vh',
  width: '100vw',
  left: '50%',
  transform: 'translateX(-50.8%)',
  backgroundColor: '#fff',
}));

const BackgroundImage = styled('div')<VisibilityProps>(({ isVisible }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 0,
  transition: 'opacity 0.2s ease-out',
  opacity: isVisible ? 1 : 0,
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  '@media (max-width: 900px)': {
    position: 'relative',
    left: 0,
    height: '60vh',
    opacity: 1
  }
}));

const ContentGrid = styled(Grid)({
  position: 'relative',
  minHeight: '100vh',
  zIndex: 1,
  '@media (max-width: 900px)': {
    minHeight: 'auto'
  }
});

export function Nosotros() {
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <NosotrosSection ref={sectionRef} isVisible={isVisible}>
      <BackgroundImage isVisible={isVisible}>
        <img
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758"
          alt="Equipo de trabajo profesional"
        />
      </BackgroundImage>
      <ContentGrid container>
        {/* Left Column - Text Content */}
        <Grid sx={{
          flex: { xs: '0 0 100%', md: '0 0 50%' },
          minWidth: 0,
          bgcolor: 'background.paper',
          position: 'relative',
          order: { xs: 2, md: 1 }
        }}>
          <Box sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            p: { xs: 4, md: 8 },
            maxWidth: '800px',
            ml: { xs: 0, md: 'auto' },
            mr: { xs: 0, md: 4 },
          }}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              color="text.primary"
              sx={{
                fontWeight: 'bold',
                mb: 4,
                fontSize: { xs: '2.5rem', md: '4rem' }
              }}
            >
              Nosotros
            </Typography>
            <Box
              sx={{
                width: '20%',
                height: '6px',
                backgroundColor: 'warning.main',
                borderRadius: '3px',
                mb: 4
              }}
            />
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, fontSize: '1.1rem' }}>
              Somos una empresa líder en servicios eléctricos con más de una década de experiencia en el mercado.
              Nuestro compromiso con la excelencia y la seguridad nos ha convertido en un referente en la industria.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
              Contamos con un equipo de profesionales altamente capacitados y certificados, dedicados a brindar
              soluciones eléctricas integrales que satisfacen las necesidades específicas de cada cliente,
              ya sea en el sector residencial, comercial o industrial.
            </Typography>
          </Box>
        </Grid>

        {/* Right Column - Spacer */}
        <Grid sx={{
          flex: { xs: '0 0 100%', md: '0 0 50%' },
          minWidth: 0,
          position: 'relative',
          order: { xs: 1, md: 2 },
          height: { xs: '60vh', md: '100vh' }
        }} />
      </ContentGrid>
    </NosotrosSection>
  );
}
