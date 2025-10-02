/**
 * Servicios component that displays the list of electrical services offered.
 * @copyright (c) Isis Astros. All rights reserved.
 */

import { Card, CardContent, CardMedia, Typography, Grid, Box, CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import React, { useState } from 'react';
import { ProductCarousel } from './ProductCarousel';

const services = [
  {
    title: 'Servicios Eléctricos',
    description: 'Soluciones integrales en electricidad para todo tipo de proyectos y necesidades.',
    images: [
      'https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
      'https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
      'https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
      'https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
      'https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
      'https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
      'https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
      'https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80'
    ],
    texts: [
      'Residenciales: Instalaciones, mantenimiento y soluciones eléctricas seguras y eficientes para hogares, garantizando el confort y la protección de su familia.',
      'Comerciales e industriales: Servicios eléctricos especializados para negocios, oficinas y plantas industriales, optimizando la operación y cumpliendo con normativas vigentes.',
      'Diseños eléctricos: Elaboración de proyectos eléctricos personalizados, planos y cálculos técnicos para nuevas construcciones y remodelaciones.',
      'Cableados: Instalación y organización profesional de cableados eléctricos, estructurados y de comunicación, asegurando funcionalidad y orden.',
      'Acometidas: Gestión e instalación de acometidas eléctricas, desde el punto de suministro hasta el interior del inmueble, cumpliendo estándares de seguridad.',
      'Remodelaciones eléctricas: Actualización y mejora de sistemas eléctricos existentes, adaptando la infraestructura a nuevas necesidades y tecnologías.',
      'Trámites ante operadores de red: Asesoría y gestión de trámites técnicos y legales ante empresas de energía y operadores de red para conexiones y certificaciones.',
      'Cargadores de vehículos eléctricos: Instalación de puntos de carga para autos eléctricos, promoviendo la movilidad sostenible y la innovación tecnológica.'
    ]
  },
  {
    title: 'Obras civiles',
    description: 'Servicios integrales en construcción y remodelación para interiores y exteriores.',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80'
    ],
    texts: [
      'Drywall: Construcción y adecuación de espacios con sistemas de drywall, ofreciendo versatilidad y acabados de alta calidad.',
      'Superboard: Instalación de paneles Superboard para soluciones resistentes y duraderas en interiores y exteriores.',
      'Techos en PVC: Montaje de techos en PVC, brindando estética, fácil mantenimiento y resistencia a la humedad.',
      'Cielo raso: Diseño e instalación de cielos rasos decorativos y funcionales, adaptados a cada ambiente.',
      'Diseño de interiores y exteriores: Proyectos personalizados de diseño para transformar y optimizar espacios residenciales y comerciales.',
      'Resanes y pintura: Reparación de superficies y aplicación de pintura profesional para renovar y proteger sus ambientes.',
      'Instalación de pisos laminados y SPC: Colocación experta de pisos laminados y SPC, garantizando durabilidad y elegancia en cada proyecto.'
    ]
  },
  {
    title: 'Reparación de electrodomésticos',
    description: 'Servicio profesional de reparación de electrodomésticos en general.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80'
    ],
    texts: [
      'Reparación de electrodomésticos en general: lavadoras, secadoras, neveras, microondas, hornos, estufas, licuadoras y otros equipos del hogar. Diagnóstico preciso y soluciones eficientes para prolongar la vida útil de sus aparatos.'
    ]
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

const ServiciosComponent = () => {
  const [open, setOpen] = useState(false);
  const [selectedServiceIdx, setSelectedServiceIdx] = useState<number | null>(null);

  const handleClickOpen = (idx: number) => {
    setSelectedServiceIdx(idx);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedServiceIdx(null);
  };

  return (
    <div className='bg-[#ccc]'>
      <Box sx={{ px: {xs: 4, md: 9}, py: { xs: 8, md: 28 } }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          my:0
        }}>
          <Typography
            variant="h3"
            component="h3"
            gutterBottom
            color="#0c0753"
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
              backgroundColor: '#F2C82F',
              borderRadius: '3px',
              mb: 6
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
          {services.map((service, idx) => (
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
                  <CardActionArea onClick={() => handleClickOpen(idx)} sx={{ height: '100%' }}>
                    <CardMedia
                      component="img"
                      image={service.images[0]}
                      alt={service.title}
                      sx={{
                        height: { xs: '300px', md: '250px' },
                        width: '100%',
                        objectFit: 'cover',
                        aspectRatio: '1/1'
                      }}
                    />
                    <CardContent sx={{ bgcolor: '#d7d7d7', flexGrow: 1, minHeight: '140px' }}>
                      <Typography variant="h6" gutterBottom component="h3">
                        {service.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {service.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Item>
            </Grid>
          ))}
        </Grid>
        {selectedServiceIdx !== null && (
          <ProductCarousel
            open={open}
            onClose={handleClose}
            images={services[selectedServiceIdx].images}
            texts={services[selectedServiceIdx].texts}
            title={services[selectedServiceIdx].title}
          />
        )}
      </Box>
    </div>
  );
}

export const Servicios = React.memo(ServiciosComponent);
