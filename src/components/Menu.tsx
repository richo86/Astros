/**
* Menu component that provides navigation functionality
* @copyright (c) Isis Astros. All rights reserved.
*/

import React, { useState } from 'react';
import { useLocation } from '../contexts/LocationContext';
import logo from '../assets/images/LOGO ASTROS_Fblanco.png';
import { Box, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import colombiaFlag from '../assets/flags/colombia.svg';
import venezuelaFlag from '../assets/flags/venezuela.svg';

interface MenuLinkProps {
  readonly href: string;
  readonly children: React.ReactNode;
  readonly onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const COUNTRY_DATA = {
  Colombia: {
    name: 'Colombia',
    flag: colombiaFlag,
  },
  Venezuela: {
    name: 'Venezuela',
    flag: venezuelaFlag,
  }
};

function MenuLink({ href, children, onClick }: MenuLinkProps) {
  return (
    <a href={href} onClick={onClick} className="hover:text-gray-300 uppercase cursor-pointer">
      {children}
    </a>
  );
}

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { selectedCountry, setSelectedCountry } = useLocation();
  // Social media links by country
  const socialLinks = {
    Instagram: selectedCountry === 'Venezuela'
      ? 'https://www.instagram.com/isiastros/'
      : 'https://www.instagram.com/isiastroscolombia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    TikTok: selectedCountry === 'Venezuela'
      ? 'https://www.tiktok.com/@isiastros.colombia'
      : 'https://www.tiktok.com/@isiastros.colombia',
    Facebook: selectedCountry === 'Venezuela'
      ? 'https://www.facebook.com/isiastros'
      : 'https://www.facebook.com/isiastroscol',
    LinkedIn: selectedCountry === 'Venezuela'
      ? 'https://www.linkedin.com/in/ingenier%C3%ADa-y-servicios-integrales-astros-sas-isiastros-980164300/'
      : 'https://www.linkedin.com/in/ingenier%C3%ADa-y-servicios-integrales-astros-sas-isiastros-980164300/',
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedCountry(event.target.value as string);
  };

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId.substring(1));
    if (targetElement) {
      const headerOffset = window.innerWidth >= 768 ? 80 : 64;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      setIsMenuOpen(false);
    }
  });

  let hamburgerTopClass = '';
  let hamburgerMiddleClass = '';
  let hamburgerBottomClass = '';
  let mobileMenuClass = 'translate-x-full opacity-0';

  if (isMenuOpen) {
    hamburgerTopClass = 'rotate-45 translate-y-2';
    hamburgerMiddleClass = 'opacity-0';
    hamburgerBottomClass = '-rotate-45 -translate-y-2';
    mobileMenuClass = 'translate-x-0 opacity-100';
  }

  return (
    <header className="bg-[#0c0753] text-white fixed top-0 left-0 right-0 z-50">      
      <div className="relative flex flex-col md:flex-row items-stretch h-16 md:h-20">
        <div className="py-2 md:py-0 -ml-[100vw] md:ml-0 pl-[100vw] md:pl-0 -mr-[100vw] md:mr-0 pr-[100vw] md:pr-0 flex items-center justify-center w-screen md:w-auto h-full">
          <div className="flex items-center">
            <a href="#" onClick={(e) => handleScroll(e, '#')} className="px-4">
              <img src={logo} alt="Astros Logo" className="h-12 md:h-16" />
            </a>
            <Select
              variant="standard"
              disableUnderline
              id="country-select-menu"
              value={selectedCountry}
              onChange={handleChange}
              sx={{
                color: 'white',
                fontSize: '0.875rem',
                '.MuiSelect-icon': {
                  color: 'white',
                  right: 0,
                },
                '& .MuiSelect-select': {
                  paddingRight: '24px !important',
                  display: 'flex',
                  alignItems: 'center',
                }
              }}
              renderValue={(value) => (
                <Box component="img" src={COUNTRY_DATA[value as keyof typeof COUNTRY_DATA].flag} alt={`${COUNTRY_DATA[value as keyof typeof COUNTRY_DATA].name} flag`} sx={{ width: 30, height: 20, objectFit: 'cover' }} />
              )}
            >
              {Object.entries(COUNTRY_DATA).map(([key, data]) => (
                <MenuItem key={key} value={key}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box component="img" src={data.flag as string} alt={`${data.name} flag`} sx={{ width: 18, height: 12, objectFit: 'cover' }} /> {data.name}
                  </Box>
                </MenuItem>
              ))}
            </Select>
          </div>
        </div>

        <div className="hidden md:flex flex-1 items-center justify-between px-4">
          <style>{`
            .social-icon {
              display: inline-block;
              transition: transform 0.2s, box-shadow 0.2s;
            }
            .social-icon:hover {
              transform: scale(1.15);
              box-shadow: 0 2px 8px rgba(0,0,0,0.15);
              color: #d1d5db;
            }
          `}</style>
          <div className="flex items-center gap-x-1 ml-4">
            <span className="text-lg">Siguenos:</span>
            <a href={socialLinks.Instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href={socialLinks.TikTok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48">
                <g>
                  <path d="M33.5 13.5c-1.2 0-2.5-1.3-2.5-2.5V8h-4v20.5c0 2.5-2 4.5-4.5 4.5s-4.5-2-4.5-4.5 2-4.5 4.5-4.5c.3 0 .7.1 1 .2v-2.2c-.3-.1-.7-.2-1-.2-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5 6.5-2.9 6.5-6.5V17.2c1.1.6 2.3.8 3.5.8h1v-4.5h-1z" fill="#25F4EE"/>
                  <path d="M33.5 13.5c-1.2 0-2.5-1.3-2.5-2.5V8h-2v20.5c0 2.5-2 4.5-4.5 4.5s-4.5-2-4.5-4.5 2-4.5 4.5-4.5c.3 0 .7.1 1 .2v-2.2c-.3-.1-.7-.2-1-.2-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5 6.5-2.9 6.5-6.5V17.2c1.1.6 2.3.8 3.5.8h1v-4.5h-1z" fill="#FE2C55"/>
                  <path d="M33.5 13.5c-1.2 0-2.5-1.3-2.5-2.5V8h-1v20.5c0 2.5-2 4.5-4.5 4.5s-4.5-2-4.5-4.5 2-4.5 4.5-4.5c.3 0 .7.1 1 .2v-2.2c-.3-.1-.7-.2-1-.2-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5 6.5-2.9 6.5-6.5V17.2c1.1.6 2.3.8 3.5.8h1v-4.5h-1z" fill="#fff"/>
                </g>
              </svg>
            </a>
            <a href={socialLinks.Facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>            
            <a href={socialLinks.LinkedIn} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon ml-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>

          <nav className="flex space-x-8 items-center text-lg mr-9">
            <MenuLink href="#productos" onClick={(e) => handleScroll(e, '#productos')}>Productos</MenuLink>
            <MenuLink href="#servicios" onClick={(e) => handleScroll(e, '#servicios')}>Servicios</MenuLink>
            <MenuLink href="#nosotros" onClick={(e) => handleScroll(e, '#nosotros')}>Nosotros</MenuLink>
            <MenuLink href="#contacto" onClick={(e) => handleScroll(e, '#contacto')}>Contacto</MenuLink>
          </nav>
      </div>

        <button
          type="button"
          onClick={handleMenuToggle}
          className={`md:hidden absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 z-50 ${isMenuOpen && 'opacity-0'}`}
          aria-label="Toggle navigation menu"
          aria-controls="mobile-menu">
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-white transition-all duration-500 ${hamburgerTopClass}`}/>
            <span className={`w-full h-0.5 bg-white transition-all duration-500 ${hamburgerMiddleClass}`}/>
            <span className={`w-full h-0.5 bg-white transition-all duration-500 ${hamburgerBottomClass}`}/>
          </div>
        </button>

        <div
          id="mobile-menu"
          tabIndex={-1}
          className={`md:hidden fixed inset-0 bg-[rgb(30,45,59)] z-40 transition-all duration-500 ease-in-out ${mobileMenuClass}`}>
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className={`absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded transition-colors`}
            aria-label="Close menu">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="h-full flex flex-col items-center justify-center space-y-8 text-xl">
            <MenuLink href="#servicios" onClick={(e) => handleScroll(e, '#servicios')}>Servicios</MenuLink>
            <MenuLink href="#nosotros" onClick={(e) => handleScroll(e, '#nosotros')}>Nosotros</MenuLink>
            <MenuLink href="#productos" onClick={(e) => handleScroll(e, '#productos')}>Productos</MenuLink>
            <MenuLink href="#contacto" onClick={(e) => handleScroll(e, '#contacto')}>Contacto</MenuLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Menu;
