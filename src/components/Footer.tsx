// Copyright (c) Isis Astros. All rights reserved.

import { Box, Container, Button, Typography, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { useLocation } from '../contexts/LocationContext';
import colombiaFlag from '../assets/flags/colombia.svg';
import venezuelaFlag from '../assets/flags/venezuela.svg';
import catalogPdf from '../assets/files/Catalogo.pdf';

const COUNTRY_DATA = {
  Colombia: {
    name: 'Colombia',
    flag: colombiaFlag,
  },
  Venezuela: {
    name: 'Venezuela',
    flag: venezuelaFlag,
  }
};

function Footer() {
  const { selectedCountry, setSelectedCountry } = useLocation();

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedCountry(event.target.value as string);
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#0c0753',
        color: 'white',
        py: 8,
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Box sx={{ 
          display: 'grid', 
          gap: 2,
          mb: 4,
          justifyContent: 'center',
          '& .MuiButton-root': {
            fontSize: '0.875rem',
            minWidth: '200px'
          }
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
            <Button color="inherit" href="#terminos">
              Términos de Servicio
            </Button>
            <Button color="inherit" href="#privacidad">
              Política de Privacidad
            </Button>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
            <Button
              component="a"
              href={catalogPdf}
              download
              color="inherit"
            >
              Catálogo
            </Button>
            <Button
              color="inherit"
              onClick={() => {
              const whatsappNumbers: Record<string, string> = {
                Colombia: '+573002640220',
                Venezuela: '+584146270108',
                Default: '+573002640220',
              };
              const number = (selectedCountry && whatsappNumbers[selectedCountry]) || whatsappNumbers.Default;
              window.open(`https://wa.me/${number}`, '_blank');
            }}
          >
            Solicitar una cotización
            </Button>
          </Box>
        </Box>
        <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
          &copy; 2024 Ingenieria y Servicios Integrales ASTROS SAS. Todos los derechos reservados.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mt: 2 }}>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>Estas visitando la página de:</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Select
              variant="standard"
              disableUnderline
              id="country-select"
              value={selectedCountry}
              onChange={handleChange}
              sx={{
                color: 'white',
                fontSize: '0.875rem',
                opacity: 0.8,
                '.MuiSelect-icon': {
                  color: 'white',
                },
                '&:hover': {
                    opacity: 1,
                }
              }}
            >
              {Object.entries(COUNTRY_DATA).map(([key, data]) => (
                <MenuItem key={key} value={key}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box component="img" src={data.flag as string} alt={`${data.name} flag`} sx={{ width: 18, height: 12, objectFit: 'cover' }} /> {data.name}
                  </Box>
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;