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
          height: { xs: '65vh', sm: '400px', md: '430px' },
          maxHeight: '70vh',
        }
      }}
    >
      <Box sx={{ position: 'relative', p: 2, height: '100%' }}>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h5" sx={{ mt: 2, mb: 2, textAlign: 'center', fontWeight: 'bold' }}>{title}</Typography>
        <Box
          sx={{ position: 'relative', width: '100%', height: { xs: '40vh', sm: '220px', md: '300px' }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Button
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              top: { xs: 40, sm: 100, md: 120 },
              left: 0,
              minWidth: 0,
              px: 2,
              fontSize: 32,
              zIndex: 2,
            }}
          >&lt;</Button>
          <Box sx={{ width: { xs: '90%', sm: '85%', md: '80%' }, mx: 'auto', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
            <img
              src={images[current]}
              alt={title}
              style={{ width: '100%', height: '100%', maxHeight: '250px', objectFit: 'contain', borderRadius: 12, background: '#fff' }}
              loading="lazy"
            />
            <Typography sx={{ mt: 3, textAlign: 'center', fontSize: { xs: 12, sm: 13, md: 14 }, maxWidth: '95%' }}>{texts[current]}</Typography>
          </Box>
          <Button
            onClick={handleNext}
            sx={{
              position: 'absolute',
              top: { xs: 80, sm: 100, md: 120 },
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
