/**
* Menu component that provides navigation functionality
* @copyright (c) Isis Astros. All rights reserved.
*/

import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';

interface MenuLinkProps {
  readonly href: string;
  readonly children: React.ReactNode;
  readonly onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

function MenuLink({ href, children, onClick }: MenuLinkProps) {
  return (
    <a href={href} onClick={onClick} className="hover:text-gray-300 uppercase cursor-pointer">
      {children}
    </a>
  );
}

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
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
    <header className="bg-[rgb(30,45,59)] text-white fixed top-0 left-0 right-0 z-50">
      <div className="relative flex flex-col md:flex-row items-stretch h-16 md:h-20">
        <div className="bg-yellow-400 py-2 md:py-0 -ml-[100vw] md:ml-0 pl-[100vw] md:pl-0 -mr-[100vw] md:mr-0 pr-[100vw] md:pr-0 flex items-center w-screen md:w-[280px] h-full">
          <a href="#" onClick={(e) => handleScroll(e, '#')} className="px-4">
            <img src={logo} alt="Astros Logo" className="h-8 md:h-10" />
          </a>
        </div>

        <div className="hidden md:flex flex-1 items-center justify-between px-4">
          <div className="flex items-center space-x-3 ml-4">
            <span className="text-lg">Siguenos:</span>
            <a href="YOUR_INSTAGRAM_URL" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="YOUR_FACEBOOK_URL" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="YOUR_TIKTOK_URL" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-gray-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.59 3.09 1.75 4.17 1.12 1.02 2.37 1.57 3.82 1.72v2.9c-1.85-.08-3.62-.74-5.01-1.92-.64-.56-1.11-1.26-1.44-2.03-.32-.75-.5-1.57-.59-2.41a16.12 16.12 0 0 1-.02-2.43zM10.125 6.43H7.69v13.105c0 .775-.63 1.405-1.404 1.405h-2.96c-.775 0-1.404-.63-1.404-1.405V6.43H-.025V3.555h10.15v2.875zM16.5 6.013c.03 0 .06.003.1.003.02-.003.05-.003.08-.003v2.876h3.805V6.013h-3.985zm.08 13.57c.775 0 1.405-.63 1.405-1.404V8.888H14.11v9.288c0 .775.63 1.405 1.404 1.405h1.066z"/></svg>
            </a>
          </div>

          <nav className="flex space-x-8 items-center text-lg mr-9">
          <MenuLink href="#servicios" onClick={(e) => handleScroll(e, '#servicios')}>Servicios</MenuLink>
          <MenuLink href="#nosotros" onClick={(e) => handleScroll(e, '#nosotros')}>Nosotros</MenuLink>
          <MenuLink href="#productos" onClick={(e) => handleScroll(e, '#productos')}>Productos</MenuLink>
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
