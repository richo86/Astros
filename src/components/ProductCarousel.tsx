import React, { useState } from 'react';
import { Dialog, IconButton, Box, Typography, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface ProductCarouselProps {
  open: boolean;
  onClose: () => void;
  images: string[];
  texts: string[];
  title: string;
}

export function ProductCarousel({ open, onClose, images, texts, title }: ProductCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  React.useEffect(() => {
    if (!open) setCurrent(0);
  }, [open]);

  React.useEffect(() => {
    if (!open || paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [open, images.length, paused]);

  return (
    <Dialog
      onClose={onClose}
      open={open}
      maxWidth={false}
      PaperProps={{
        sx: {
          width: { xs: '95vw', sm: '700px', md: '900px' },
          maxWidth: '95vw',
          height: { xs: '80vh', sm: '70vh', md: '80vh', lg: '70vh', xl: '55vh' },
          maxHeight: '80vh',
        }
      }}
    >
  <Box sx={{ position: 'relative', p: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
        >
          <CloseIcon />
        </IconButton>
  <Typography
    variant="h5"
    sx={{
      mt: { xs: 1, sm: 2, md: 2, lg: 2, xl: 6 },
      mb: 2,
      textAlign: 'center',
      fontWeight: 'bold'
    }}
  >
    {title}
  </Typography>
        <Box
          sx={{ 
            position: 'relative', 
            width: '100%', 
            height: { xs: '60vh', sm: '50vh', md: '55vh', lg: '45vh' }, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            mt: 0
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Button
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              left: 0,
              minWidth: 0,
              px: 2,
              fontSize: 32,
              zIndex: 2,
            }}
          >&lt;</Button>
          <Box sx={{ 
            width: { xs: '90%', sm: '85%', md: '80%' }, 
            mx: 'auto', 
            height: '100%', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            gap: 2,
            pb: 1
          }}>
            <Box
              component="img"
              src={images[current]}
              alt={title}
              loading="lazy"
              sx={{ 
                width: '100%', 
                height: { xs: '55%', sm: '60%', md: '60%', lg: '65%', xl: '65%' }, 
                objectFit: 'contain', 
                borderRadius: '12px', 
                bgcolor: 'background.paper' 
              }}
            />
            <Typography sx={{ 
              mt: 2, 
              textAlign: 'center', 
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, 
              maxWidth: '95%',
              maxHeight: '25%',
              overflowY: 'auto'
            }}>{texts[current]}</Typography>
          </Box>
          <Button
            onClick={handleNext}
            sx={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              right: 0,
              minWidth: 0,
              px: 2,
              fontSize: 32,
              zIndex: 2,
            }}
          >&gt;</Button>
        </Box>
      </Box>
    </Dialog>
  );
}
