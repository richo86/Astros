import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  Typography,
  Grid,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  CardActionArea,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

const products = [
  {
    title: 'Paneles Eléctricos',
    description: 'Paneles de última generación para todo tipo de instalaciones.',
    image: '/images/panel-electrico.webp',
    details: 'Descripción detallada de los paneles eléctricos, incluyendo especificaciones técnicas, modelos disponibles y aplicaciones comunes.'
  },
  {
    title: 'Iluminación LED',
    description: 'Soluciones de iluminación eficiente y duradera.',
    image: '/images/iluminacion-led.webp',
    details: 'Información completa sobre nuestras soluciones de iluminación LED, beneficios de ahorro energético, tipos de luminarias y proyectos destacados.'
  },
  {
    title: 'Generadores',
    description: 'Sistemas de respaldo de energía para su tranquilidad.',
    image: '/images/generador.webp',
    details: 'Detalles sobre los generadores que ofrecemos, capacidades, tipos de combustible, características de funcionamiento automático y mantenimiento.'
  },
  {
    title: 'Material Eléctrico',
    description: 'Productos de alta calidad para instalaciones seguras.',
    image: '/images/material-electrico.webp',
    details: 'Catálogo de material eléctrico diverso, incluyendo cables, interruptores, enchufes, cajas de conexión y normativas de seguridad.'
  }
];

const ProductCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  height: '350px',
  maxWidth: '400px',
  mx: 'auto',
  '&:hover .overlay': {
    opacity: 0.8,
  },
  '&:hover .text-content': {
    opacity: 1,
  },
}));

const CardOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  opacity: 0,
  transition: theme.transitions.create('opacity'),
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
  textAlign: 'center',
  color: '#fff',
}));

const TextContent = styled(Box)(({ theme }) => ({
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: '#fff',
    padding: theme.spacing(1, 2),
    zIndex: 2,
    transition: theme.transitions.create('opacity'),
    opacity: 1,
  }));


export function Productos() {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[0] | null>(null);

  const handleClickOpen = (product: (typeof products)[0]) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  return (
    <Box sx={{ px: { xs: 3, md: 6 }, py: { xs: 4, md: 8 }, mb: 8 }}>
       <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: 4
        }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            color="text.primary"
            sx={{
              textAlign: 'center',
              fontSize: { xs: '2.5rem', md: '3rem' },
              mb: 1,
              fontWeight: 'bold'
            }}
          >
            Nuestros Productos
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
        <Grid container sx={{ display: 'flex', flexWrap: 'wrap', maxWidth: 'lg', mx: 'auto', justifyContent: 'center' }}>
          {products.map((product) => (
            <Grid
              key={product.title}
              sx={{
                flex: { xs: '0 0 100%', sm: '0 0 30%', md: '0 0 40%' },
                justifyContent: 'center',
                minWidth: 0,
                padding: (theme) => theme.spacing(1.5)
              }}
            >
              <ProductCard>
                <CardActionArea onClick={() => handleClickOpen(product)} sx={{ height: '100%' }}>
                  <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.title}
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0,
                  }}
                />
                 <TextContent className="text-content">
                    <Typography variant="h6" component="div" gutterBottom>
                      {product.title}
                    </Typography>
                    <Typography variant="body2">
                      {product.description}
                    </Typography>
                  </TextContent>
              </CardActionArea>
            </ProductCard>
            </Grid>
          ))}
        </Grid>

      <Dialog onClose={handleClose} open={open} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ m: 0, p: 2 }}>
          {selectedProduct?.title}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
           <CardMedia
              component="img"
              height="200"
              image={selectedProduct?.image}
              alt={selectedProduct?.title}
              sx={{ mb: 2, objectFit: 'contain' }}
            />
          <Typography gutterBottom>
            {selectedProduct?.details}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}