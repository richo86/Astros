// Copyright (c) 2025 Isis Astros. All rights reserved.

import { Typography, Button, Box, Grid, Paper } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GoogleMapComponent from './Map';

const iconStyle = { mr: 2, color: 'primary.main' };

export function Contacto() {
  const handleContactClick = () => {
    window.open('https://wa.me/+573002640220', '_blank')
  };

  return (
    <Box sx={{ px: { xs: 3, md: 6 }, py: { xs: 4, md: 8 }, backgroundColor: '#fff' }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mb: 2,
        mt: 4
      }}>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          color="#0c0753"
          sx={{
            textAlign: 'center',
            fontSize: { xs: '2.5rem', md: '3rem' },
            mb: 1,
            fontWeight: 'bold'
          }}
        >
          Contacto
        </Typography>
        <Box
          sx={{
            width: '10%',
            height: '6px',
            backgroundColor: '#F2C82F',
            borderRadius: '3px',
            mb: 2
          }}
        />
        <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', maxWidth: { lg: '800px', xl: '1000px' }, mx: 'auto' }}>
          ¿Necesita información sobre nuestros productos o servicios?<br />
          Ya sea para asesoría técnica, cotizaciones o consultas generales, estamos aquí para ayudarle.
        </Typography>
      </Box>

      <Grid container sx={{ display: 'flex', flexWrap: 'wrap', maxWidth: 'lg', mx: 'auto', justifyContent: 'center' }}>
        <Grid
          sx={{
            flex: { xs: '0 0 100%', md: '0 0 35%' },
            justifyContent: 'center',
            minWidth: 0,
            padding: theme => theme.spacing(2),
            marginLeft: { xs: '0px', md: '150px'},
          }}
        >
          <Box sx={{
            mb: 4,
            mt: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}>
            <Typography variant="h5" component="h3" gutterBottom color="black" sx={{ textAlign: 'left', width: '100%' }}>
              Oficina principal
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, mt: 3 }}>
              <LocationOnIcon sx={iconStyle} />
              <Typography variant="body1">
                Carrera 14 #147-70, local 56<br />
                Centro Comercial Capri Express<br />
                Bogotá, Colombia<br />
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <PhoneIcon sx={iconStyle} />
              <Typography variant="body1">
                (+57) 300-264 0220 <br />
                (+57) 6012489420
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <EmailIcon sx={iconStyle} />
              <Typography variant="body1">
                isiastros@gmail.com
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
              <AccessTimeIcon sx={iconStyle} />
              <Typography variant="body1">
                Lunes a Viernes: 8:00 AM - 5:00 PM<br />
                Sábados: 8:00 AM - 12:00 PM
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                bgcolor: '#0c0753',
                '&:hover': {
                  bgcolor: '#0c075388',
                },
              }}
              onClick={handleContactClick}
            >
              Contactar un asesor
            </Button>
          </Box>
        </Grid>
        <Grid
          sx={{
            flex: { xs: '0 0 100%', md: '0 0 50%' },
            justifyContent: 'center',
            minWidth: 0,
            padding: theme => theme.spacing(2)
          }}
        >          <Paper elevation={3} sx={{ 
              height: '400px',
              width: '100%',
              display: 'flex',
              overflow: 'hidden'
            }}>
            <Box sx={{ flexGrow: 1 }}>
              <GoogleMapComponent />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
