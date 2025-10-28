/**
 * ServiciosVenezuela component for Venezuela-specific electrical and civil services.
 * @copyright (c) Isis Astros. All rights reserved.
 */

import { Card, CardContent, CardMedia, Typography, Grid, Box, CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ProductCarousel } from './ProductCarousel';
// You can update these images to Venezuela-specific ones if available
import img1 from '../assets/images/domesticos.jpg';
import img2 from '../assets/images/industria.jpg';
import img3 from '../assets/images/plans.jpg';
import img4 from '../assets/images/cables-servicios.jpg';
import img5 from '../assets/images/acometidas.jpg';
import img6 from '../assets/images/remodeling.jpg';
import img7 from '../assets/images/tramites.jpg';
import img8 from '../assets/images/carro.jpg';
import img9 from '../assets/images/solar.jpg';
import img10 from '../assets/images/instalacion.jpg';
import img11 from '../assets/images/domotica.jpg';
import img12 from '../assets/images/drywall.jpg';
import img13 from '../assets/images/superboard.jpg';
import img14 from '../assets/images/pvc.jpg';
import img15 from '../assets/images/cielo.jpg';
import img16 from '../assets/images/interior.jpg';
import img17 from '../assets/images/pintando.jpg';
import img18 from '../assets/images/laminados.jpg';
import img19 from '../assets/images/renders.jpg';
import img20 from '../assets/images/reparacion.jpg';

const services = [
  {
    title: 'Servicios Eléctricos',
    description: 'Soluciones integrales en electricidad para todo tipo de proyectos y necesidades.',
    cover:'https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
    images: [
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
      img10,
      img11
    ],
    texts: [
      'Residenciales: Instalaciones, mantenimiento y soluciones eléctricas seguras y eficientes para hogares, garantizando el confort y la protección de su familia.',
      'Comerciales e industriales: Servicios eléctricos especializados para negocios, oficinas y plantas industriales, optimizando la operación y cumpliendo con normativas vigentes.',
      'Diseños eléctricos: Elaboración de proyectos eléctricos personalizados, planos y cálculos técnicos para nuevas construcciones y remodelaciones.',
      'Cableados: Instalación y organización profesional de cableados eléctricos, estructurados y de comunicación, asegurando funcionalidad y orden.',
      'Acometidas: Gestión e instalación de acometidas eléctricas, desde el punto de suministro hasta el interior del inmueble, cumpliendo estándares de seguridad.',
      'Remodelaciones eléctricas: Actualización y mejora de sistemas eléctricos existentes, adaptando la infraestructura a nuevas necesidades y tecnologías.',
      'Trámites ante operadores de red: Asesoría y gestión de trámites técnicos y legales ante empresas de energía y operadores de red para conexiones y certificaciones.',
      'Cargadores de vehículos eléctricos: Instalación de puntos de carga para autos eléctricos, promoviendo la movilidad sostenible y la innovación tecnológica.',
      'Paneles solares: Instalación y mantenimiento de sistemas de paneles solares para generación de energía renovable, optimizando el consumo eléctrico y promoviendo la sostenibilidad.',
      'Instalaciones de empalmes, terminales y conectores separables de media tensión: Garantizando conexiones seguras y eficientes en redes eléctricas industriales y comerciales.',
      'Domótica: Implementación de sistemas de domótica para automatización de iluminación, seguridad, climatización y control inteligente de espacios residenciales y comerciales.'
    ]
  },
  {
    title: 'Obras civiles',
    description: 'Servicios integrales en construcción y remodelación para interiores y exteriores.',
    cover:'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
    images: [
      img12,
      img13,
      img14,
      img15,
      img16,
      img17,
      img18,
      img19
    ],
    texts: [
      'Drywall: Construcción y adecuación de espacios con sistemas de drywall, ofreciendo versatilidad y acabados de alta calidad.',
      'Superboard: Instalación de paneles Superboard para soluciones resistentes y duraderas en interiores y exteriores.',
      'Techos en PVC: Montaje de techos en PVC, brindando estética, fácil mantenimiento y resistencia a la humedad.',
      'Cielo raso: Diseño e instalación de cielos rasos decorativos y funcionales, adaptados a cada ambiente.',
      'Diseño de interiores y exteriores: Proyectos personalizados de diseño para transformar y optimizar espacios residenciales y comerciales.',
      'Resanes y pintura: Reparación de superficies y aplicación de pintura profesional para renovar y proteger sus ambientes.',
      'Instalación de pisos laminados y SPC: Colocación experta de pisos laminados y SPC, garantizando durabilidad y elegancia en cada proyecto.',
      'Renders: Elaboración de renders arquitectónicos y de diseño para visualizar proyectos antes de su ejecución, facilitando la toma de decisiones y presentación a clientes.'
    ]
  },
  {
    title: 'Reparación de electrodomésticos',
    description: 'Servicio profesional de reparación de electrodomésticos en general.',
    cover:'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
    images: [
      img20
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

const AnimatedGridItem = styled(Grid)({
  transition: 'opacity 0.6s ease-in-out, transform 0.5s ease-in-out',
  opacity: 0,
  transform: 'translateY(40px)',
  '&.card-visible': {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

const ServiceGrid = React.memo(function ServiceGrid({ services, handleClickOpen }: { services: typeof services, handleClickOpen: (idx: number) => void }) {
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('card-visible');
          } else {
            entry.target.classList.remove('card-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRefs = cardRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [services]);

  return (
      <Grid
        container
        spacing={4}
        sx={{
          display: 'flex',
          flexWrap: { xs: 'wrap', md: 'nowrap' }
        }}
      >
        {services.map((service, idx) => (
          <AnimatedGridItem
            key={service.title}
            ref={(el) => (cardRefs.current[idx] = el)}
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
                    image={service.cover}
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
          </AnimatedGridItem>
        ))}
      </Grid>
  );
});

const ServiciosVenezuelaComponent = () => {
  const [open, setOpen] = useState(false);
  const [selectedServiceIdx, setSelectedServiceIdx] = useState<number | null>(null);

  const handleClickOpen = useCallback((idx: number) => {
    setSelectedServiceIdx(idx);
    setOpen(true);
  }, []);
  const handleClose = useCallback(() => {
    setOpen(false);
    setSelectedServiceIdx(null);
  }, []);

  return (
    <>
      <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="100" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" className="svgcolor-light">
        <path d="M0 0 L50 100 L100 0 Z"></path>
      </svg>
      <div className='bg-[#f2f2f2]'>
        <Box sx={{ px: {xs: 4, md: 9}, py: { xs: 4, md: 10 } }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            my:2,
            pt:2
          }}>
            <Typography
              variant="h3"
              component="h3"
              gutterBottom
              color="#0c0753"
              sx={{
                textAlign: 'center',
                fontSize: { xs: '2.5rem', md: '3rem' },
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
                mb: 4
              }}
            />
          </Box>
          <ServiceGrid services={services} handleClickOpen={handleClickOpen} />
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
    </>
  );
}

export const ServiciosVenezuela = React.memo(ServiciosVenezuelaComponent);
