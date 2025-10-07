// @ts-check
/**
 * @fileoverview Component that displays company information with a fixed background effect.
 * @module components/Nosotros
 * @copyright (c) 2024 Isis Astros. All rights reserved.
 */

import { Typography, Grid, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
// ...existing code...
import usImg from '../assets/images/Nosotros.jpg';

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
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 0,
  opacity: isVisible ? 1 : 0,
  transition: 'opacity 0.2s ease-out',
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
  const isVisible = true;
  return (
    <NosotrosSection isVisible={isVisible}>
      <BackgroundImage isVisible={isVisible}>
        <img
          src={usImg}
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
              color="#0c0753"
              sx={{
                fontWeight: 'bold',
                mb: 4,
                mt: { xs: 4, md: 0 },
                fontSize: { xs: '2.5rem', md: '4rem' }
              }}
            >
              Nosotros
            </Typography>
            <Box
              sx={{
                width: '20%',
                height: '6px',
                backgroundColor: '#F2C82F',
                borderRadius: '3px',
                mb: 4
              }}
            />
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, fontSize: '1.1rem' }}>
              Somos una empresa multinacional dedicada a proveer soluciones integrales que nos permiten ofrecer servicios
               y productos de calidad, especializados en las diferentes ramas de la ingeniería,
                así mismo en las áreas de electricidad, seguridad industrial, telecomunicaciones,
                 construcción entre otras, con la finalidad de brindarles de esta forma el mejor servicio,
                  que satisfaga las necesidades de nuestros clientes. 

            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
              Nuestra organización se encuentra conformada por un equipo multidisciplinario de colaboradores de  gran trayectoria profesional,
               encargado de proveer la mejor experiencia a nuestros clientes, nos encontramos integrados por profesionales de la ingeniería
                en las áreas de electricidad, telecomunicaciones, sistemas y civil.
            </Typography>
          </Box>
        </Grid>

        {/* Right Column - Spacer */}
        <Grid sx={{
          flex: { xs: '0 0 100%', md: '0 0 50%' },
          minWidth: 0,
          position: 'relative',
          order: { xs: 1, md: 2 },
          height: { xs: 0, md: '100vh' }
        }} />
      </ContentGrid>
    </NosotrosSection>
  );
}
