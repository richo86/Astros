import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold hover:text-gray-200">Astros</Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/servicios" className="hover:text-gray-200">Servicios</Link>
          <Link to="/nosotros" className="hover:text-gray-200">Nosotros</Link>
          <Link to="/contacto" className="hover:text-gray-200">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}

export default Menu;
