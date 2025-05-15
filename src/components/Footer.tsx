// Copyright (c) Isis Astros. All rights reserved.

import { Box, Container, Button, Typography, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { useLocation } from '../contexts/LocationContext';

function Footer() {
  const { selectedCountry, setSelectedCountry } = useLocation();

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedCountry(event.target.value as string);
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'grey.900',
        color: 'white',
        py: 8,
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Box component="nav" sx={{ mb: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button color="inherit" href="#terminos" sx={{ mx: 2 }}>
            Términos de Servicio
          </Button>
          <Button color="inherit" href="#privacidad" sx={{ mx: 2 }}>
            Política de Privacidad
          </Button>
        </Box>
        <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
          &copy; 2023 Su Compañía de Servicios Eléctricos. Todos los derechos reservados.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mt: 2 }}>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>Estas visitando la página de:</Typography>
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
            <MenuItem value="Colombia">Colombia</MenuItem>
            <MenuItem value="Venezuela">Venezuela</MenuItem>
          </Select>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;