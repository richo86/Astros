// Copyright (c) Isis Astros. All rights reserved.

/**
 * Carousel component that displays a fullscreen image slideshow
 * with automatic transitions and fade effects.
 */
import { useState, useEffect, useRef, memo } from 'react';
import { styled } from '@mui/material';

const MENU_HEIGHT = 80;
const CarouselContainer = styled('div')(() => ({
  position: 'fixed',
  top: `${MENU_HEIGHT}px`,
  left: 0,
  right: 0,
  height: `calc(100vh - ${MENU_HEIGHT}px)`,
  zIndex: -1,
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
    background: 'linear-gradient(to bottom, transparent 0%, rgba(249, 250, 251, 0) 0%, rgba(249, 250, 251, 1) 100%)',
    pointerEvents: 'none',
    opacity: 0,
    transition: 'opacity 0.5s ease-in-out',
  },
  '&.fade-out::after': {
    opacity: 1,
  }
}));

const CarouselTrack = styled('div')({
  display: 'flex',
  transition: 'transform 0.5s ease-in-out',
  height: '100%',
  width: '100%',
  position: 'relative',
});

const CarouselSlide = styled('div')({
  minWidth: '100%',
  width: '100vw',
  height: '100%',
  flex: '0 0 100%',
  position: 'relative',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    left: 0,
    top: 0,
  },
});

const CarouselText = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'white',
  // Default size for mobile
  fontSize: '2rem',
  width: '100%',
  lineHeight: 1.3,
  fontWeight: 'bold',
  textAlign: 'center',
  textTransform: 'uppercase',
  zIndex: 51,
  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
  maxWidth: '1200px',
  // Medium screens
  '@media (min-width: 640px)': {
    fontSize: '2.5rem',
    width: '90%',
    lineHeight: 1.2
  },
  // Large screens
  '@media (min-width: 1024px)': {
    fontSize: '3.8rem',
    width: '80%',
    lineHeight: 1.1
  }
});

interface CarouselProps {
  readonly images: readonly string[];
  readonly shouldFadeOut: boolean;
}

const Carousel = ({ images, shouldFadeOut }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const SLIDE_INTERVAL = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(slide => (slide + 1) % images.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  let fadeClass = '';
  if (shouldFadeOut) {
    fadeClass = 'fade-out';
  }

  return (
    <CarouselContainer className={fadeClass}>
      <CarouselText>
      </CarouselText>
      <CarouselTrack ref={carouselRef}>
        {images.map(img => (
          <CarouselSlide key={img}>
            <img src={img} alt="Servicio Eléctrico" loading="lazy" />
          </CarouselSlide>
        ))}
      </CarouselTrack>
    </CarouselContainer>
  );
}

export default memo(Carousel);