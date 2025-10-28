import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ProductCarousel } from './ProductCarousel';
import {
  Card,
  CardMedia,
  Typography,
  Grid,
  Box,
  CardActionArea,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import img1 from '../assets/images/Iluminacion.png';
import img2 from '../assets/images/Cables.png';
import img3 from '../assets/images/Plantas.png';
import img4 from '../assets/images/Terminales.png';
import img5 from '../assets/images/Cintas.png';
import img6 from '../assets/images/Empalmes.png';
import img7 from '../assets/images/Protecciones.png';
import img8 from '../assets/images/Craneal.png';
import img9 from '../assets/images/Visual.png';
import img10 from '../assets/images/Auditiva.png';
import img11 from '../assets/images/Respiratoria.png';
import img12 from '../assets/images/Corporal.png';
import img13 from '../assets/images/Guantes.png';
import img14 from '../assets/images/Botas.png';
import img15 from '../assets/images/Pinturas.png';
import img16 from '../assets/images/Discos.png';
import img17 from '../assets/images/Tuberias.png';
import img18 from '../assets/images/Impermeabilizacion.png';
import img19 from '../assets/images/Generales.jpg';
import img20 from '../assets/images/Capacitaciones.jpg';
import img21 from '../assets/images/Remodelaciones.jpg';
import img22 from '../assets/images/Electrico.jpg';
import img23 from '../assets/images/EPP.jpg';
import img24 from '../assets/images/Servicios.jpg';
import img25 from '../assets/images/Ferretero.jpg';
import img26 from '../assets/images/Herramientas.png';

const products = [
  {
    title: 'Productos Eléctricos',
    description: 'Soluciones completas en baja y media tensión.',
    cover: img22,
    images: [img1, img2, img3, img4, img5, img6, img7],
    texts: [
      'Sistemas LED de alta eficiencia, luminarias industriales y decorativas, iluminación de emergencia y control de iluminación inteligente',
      'Cables de baja y media tensión, conductores especiales, cableado estructurado y fibra óptica certificados',
      'Plantas eléctricas diésel y gasolina, sistemas de respaldo UPS, y transferencias automáticas',
      'Terminales para conexiones seguras en baja y media tensión, conectores industriales y accesorios de conexión',
      'Cintas aislantes profesionales, cintas de alto voltaje, cintas autofundentes y cintas de señalización',
      'Empalmes premoldeados para media tensión, kits de empalme termocontráctil y conexiones especializadas',
      'Interruptores termomagnéticos, DPS, protección diferencial y sistemas de puesta a tierra',
    ]
  },
  {
    title: 'Equipos de Protección Personal',
    description: 'Dotación completa para seguridad industrial.',
    cover: img23,
    images: [img8, img9, img10, img11, img12, img13, img14],
    texts: [
      'Cascos de seguridad certificados, barbiquejos, protectores faciales y accesorios para trabajo en altura',
      'Gafas de seguridad con protección UV, monogafas para químicos y caretas faciales con diversos recubrimientos',
      'Protectores auditivos tipo copa y tapones con diferentes niveles de atenuación para ambientes industriales',
      'Respiradores para partículas, máscaras con filtros especializados y equipos de respiración autónoma',
      'Overoles, trajes especializados resistentes a químicos, chalecos reflectivos y ropa de trabajo ignífuga',
      'Guantes de diferentes materiales para protección mecánica, química, térmica y eléctrica',
      'Calzado de seguridad con puntera, suela antideslizante y protección dieléctrica certificada'
    ]
  },
  {
    title: 'Productos Ferreteros',
    description: 'Herramientas profesionales y materiales de ferretería.',
    cover: img25,
    images: [img15, img16, img17, img18, img26],
    texts: [
      'Pinturas arquitectónicas, epóxicas, anticorrosivas y recubrimientos especializados para diferentes superficies',
      'Discos de corte y pulido para metal y concreto, brocas especializadas y accesorios para herramientas',
      'Tuberías PVC, EMT, IMC y accesorios para instalaciones eléctricas e hidráulicas certificadas',
      'Membranas impermeabilizantes, recubrimientos acrílicos y sistemas de impermeabilización profesional',
      'Herramientas manuales y eléctricas profesionales, equipos de medición y diagnóstico certificados'
    ]
  },
  {
    title: 'Unidad de servicios',
    description: 'Servicios integrales eléctricos y de mantenimiento.',
    cover: img24,
    images: [img19, img20, img21],
    texts: [
      'Instalaciones eléctricas en general: Baja y media tensión, empalmes y terminales, estudios y balanceos de carga, plantas eléctricas, tableros de control, protecciones eléctricas, tableros de control, protecciones eléctricas, iluminación interior y exterior, sistemas fotovoltaicos (paneles solares)',
      'Capacitaciones y asesorías técnicas en: Teoria de cables, seminarios de conexiones elécricas, taller de empalmes y terminales de media tensión y equipos de protección personal',
      'Decoración de espacios interiores y exteriores, fabricación de muebles personalizados para ornamentación, pintura y adecuación de áreas',
    ]
  }
];

const ProductCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  height: '250px',
  maxWidth: '400px',
  mx: 'auto',
  opacity: 1,
  '&:hover .overlay': {
    opacity: 0.8,
  },
  '&:hover .text-content': {
    opacity: 1,
  },
  [theme.breakpoints.down('sm')]: {
    transition: 'transform 2s cubic-bezier(0.23, 1, 0.32, 1), opacity 2s cubic-bezier(0.23, 1, 0.32, 1)',
    opacity: 0.3,
    transform: 'translateY(60px) rotate(-8deg)',
    '&.card-visible': {
      opacity: 1,
      transform: 'translateY(0) rotate(0deg)',
    },
  },
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


type ProductType = typeof products[0];
interface ProductCardGridProps {
  products: ProductType[];
  handleClickOpen: (idx: number) => void;
}

const ProductCardGrid = React.memo(function ProductCardGrid({ products, handleClickOpen }: ProductCardGridProps) {
  const productCardsRef = useRef<Array<HTMLDivElement | null>>([]);

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

    const currentCards = productCardsRef.current;
    currentCards.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      currentCards.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, [products]);

  return (
    <Grid container sx={{ display: 'flex', flexWrap: 'wrap', maxWidth: 'lg', mx: 'auto', justifyContent: 'center' }}>
      {products.map((product, idx) => (
        <Grid
          key={product.title}
          sx={{
            flex: { xs: '0 0 100%', sm: '0 0 30%', md: '0 0 40%' },
            justifyContent: 'center',
            minWidth: 0,
            padding: (theme) => theme.spacing(1.5)
          }}
        >
          <ProductCard ref={(el) => (productCardsRef.current[idx] = el)}>
            <CardActionArea onClick={() => handleClickOpen(idx)} sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                image={product.cover}
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
  );
});


const ProductosComponent = () => {
  console.log('Productos rendered')
  const [open, setOpen] = useState(false);
  const [selectedProductIdx, setSelectedProductIdx] = useState<number | null>(null);

  // Preload carousel images on mount
  React.useEffect(() => {
    products.forEach(product => {
      product.images.forEach(imgSrc => {
        const img = new window.Image();
        img.src = imgSrc;
      });
    });
  }, []);

  const handleClickOpen = useCallback((idx: number) => {
    setSelectedProductIdx(idx);
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
    setSelectedProductIdx(null);
  }, []);

  return (
    <Box sx={{ px: { xs: 3, md: 6 }, py: { xs: 2, md: 4 }, backgroundColor: '#ffffffff' }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mb: 2
      }}>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          color="#0c0753"
          sx={{
            textAlign: 'center',
            fontSize: { xs: '2.5rem', md: '3rem' },
            mt: 0,
            mb: 0,
            fontWeight: 'bold'
          }}
        >            Productos
        </Typography>
        <Typography
          variant="h6"
          component="h3"
          gutterBottom
          color="text.secondary"
          sx={{
            textAlign: 'center',
            maxWidth: '800px',
            mb: 3,
            mt: 2
          }}
        >
          Soluciones integrales en productos eléctricos, seguridad industrial y servicios técnicos especializados
        </Typography>
        <Box
          sx={{
            width: '20%',
            height: '6px',
            backgroundColor: '#F2C82F',
            borderRadius: '3px'
          }}
        />
      </Box>
      <ProductCardGrid products={products} handleClickOpen={handleClickOpen} />

      {selectedProductIdx !== null && (
        <ProductCarousel
          open={open}
          onClose={handleClose}
          images={products[selectedProductIdx].images}
          texts={products[selectedProductIdx].texts}
          title={products[selectedProductIdx].title}
        />
      )}
    </Box>
  );
}

export const Productos = React.memo(ProductosComponent);