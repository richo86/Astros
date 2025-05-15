/**
 * Servicios component that displays the list of electrical services offered.
 * @copyright (c) Isis Astros. All rights reserved.
 */

import { Card, CardContent, CardMedia, Typography, Grid, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const services = [
  {
    title: 'Servicios Residenciales',
    description: 'Soluciones eléctricas completas para su hogar, incluyendo instalaciones, reparaciones y mantenimiento.',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80'
  },
  {
    title: 'Servicios Comerciales',
    description: 'Mantenimiento e instalaciones eléctricas para negocios, oficinas y locales comerciales.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80'
  },
  {
    title: 'Servicios Industriales',
    description: 'Soluciones eléctricas de alta potencia para fábricas e instalaciones industriales.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80'
  }
];

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '100%',
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

export function Servicios() {
  return (
    <div className='p-9 mx-9 my-9'>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mb: 4,
        my:8
      }}>
        <Typography
          variant="h3"
          component="h3"
          gutterBottom
          color="text.primary"
          sx={{
            textAlign: 'center',
            fontSize: { xs: '3rem', md: '3.5rem' },
            mb: 1,
            fontWeight: 'bold'
          }}
        >
          Nuestros Servicios
        </Typography>
        <Box
          sx={{
            width: '20%',
            height: '6px',
            backgroundColor: 'warning.main',
            borderRadius: '3px'
          }}
        />
      </Box>
      <Grid
        container
        spacing={4}
        sx={{
          display: 'flex',
          flexWrap: { xs: 'wrap', md: 'nowrap' }
        }}
      >
        {services.map(service => (
          <Grid
            key={service.title}
            sx={{
              flex: { xs: '0 0 100%', md: 1 },
              minWidth: 0,
              mb: { xs: 2, md: 0 }
            }}
          >
            <Item sx={{ maxWidth: '400px', mx: 'auto' }}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  image={service.image}
                  alt={service.title}
                  sx={{
                    height: { xs: '300px', md: '250px' },
                    width: '100%',
                    objectFit: 'cover',
                    aspectRatio: '1/1'
                  }}
                />
                <CardContent sx={{ bgcolor: 'grey.100', flexGrow: 1, minHeight: '200px' }}>
                  <Typography variant="h6" gutterBottom component="h3">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Item>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
