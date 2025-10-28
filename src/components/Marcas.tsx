// Copyright (c) Isis Astros. All rights reserved.

import { Box, Container, Typography } from '@mui/material';
import { keyframes } from '@mui/system';

import brand1 from '../assets/images/brands/SILVANIA.png';
import brand2 from '../assets/images/brands/3M.png';
import brand3 from '../assets/images/brands/CORONA.png';
import brand4 from '../assets/images/brands/cu-conectores.png';
import brand5 from '../assets/images/brands/LEGRAND.png';
import brand6 from '../assets/images/brands/LUTRON.png';
import brand7 from '../assets/images/brands/PAVCO.jpg';
import brand8 from '../assets/images/brands/Richi.png';
import brand9 from '../assets/images/brands/SCHNEIDER.png';
import brand10 from '../assets/images/brands/SIEMENS.png';
import brand11 from '../assets/images/brands/TRAMONTINA.png';

interface Logo {
  id: number;
  src: string;
  alt: string;
}

const LOGOS: Logo[] = [
  { id: 1, src: brand1, alt: 'Brand 1' },
  { id: 2, src: brand2, alt: 'Brand 2' },
  { id: 3, src: brand3, alt: 'Brand 3' },
  { id: 4, src: brand4, alt: 'Brand 4' },
  { id: 5, src: brand5, alt: 'Brand 5' },
  { id: 6, src: brand6, alt: 'Brand 6' },
  { id: 7, src: brand7, alt: 'Brand 7' },
  { id: 8, src: brand8, alt: 'Brand 8' },
  { id: 9, src: brand9, alt: 'Brand 9' },
  { id: 10, src: brand10, alt: 'Brand 10' },
  { id: 11, src: brand11, alt: 'Brand 11' },
];

const slideAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50.7%);
  }
`;

function Marcas() {
  // Create a larger set of logos that will ensure coverage across the screen
  const doubleLogos = [...LOGOS, ...LOGOS];

  return (
    <Box sx={{ py: { xs: 10, sm: 12, md: 16 }, bgcolor: '#f2f2f2', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          sx={{
            textAlign: 'center',
            mb: 2,
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 'bold',
            color: '#0c0753'
          }}
        >
          NUESTRAS MARCAS ALIADAS
        </Typography>
        <Box
          sx={{
            width: '35%',
            height: '6px',
            backgroundColor: '#F2C82F',
            borderRadius: '3px',
            mb: 4,
            mx: 'auto'
          }}
        />
        <Box
          sx={{
            width: '100vw',
            position: 'relative',
            left: '50%',
            right: '50%',
            marginLeft: '-50vw',
            marginRight: '-50vw',
            overflow: 'hidden',
            bgcolor: '#f2f2f2'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: { xs: 4, sm: 6, md: 8, lg: 10, xl: 12 },
              animation: `${slideAnimation} 30s linear infinite`,
              willChange: 'transform',
              width: 'fit-content'
            }}
          >
            {[...LOGOS, ...LOGOS].map((logo, index) => (
              <Box
                key={`${logo.id}-${index}`}
                sx={{
                  flex: '0 0 auto',
                  width: { xs: '150px', sm: '180px', md: '200px', lg: '220px' },
                  height: { xs: '80px', sm: '100px', md: '120px', lg: '140px' },
                  img: {
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }
                }}
              >
                <img src={logo.src} alt={logo.alt} />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Marcas;