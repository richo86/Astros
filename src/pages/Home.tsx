import React, { useState, useEffect, useRef } from 'react'

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  const images = [
    "https://group.met.com/media/omvoe0f3/electricity.jpg?anchor=center&mode=crop&width=1920&rnd=133293326643000000&mode=max&upscale=false",
    "https://brainboxai.com/hs-fs/hubfs/Imported_Blog_Media/header_articles_%2811%29-2.png?width=2000&height=1200&name=header_articles_%2811%29-2.png",
    "https://www.popsci.com/wp-content/uploads/2023/06/16/how-does-electricity-work-high-voltage-wires-china.jpg?strip=all&quality=85"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <div className="carousel-container">
            <div className="carousel" ref={carouselRef}>
              {images.map((img, index) => (
                <div key={index} className="carousel-item">
                  <img src={img} alt={`Servicio Eléctrico ${index + 1}`} className="carousel-image" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Soluciones Eléctricas Profesionales para sus Necesidades</h2>
          <p className="text-gray-700">
            Ofrecemos una amplia gama de servicios eléctricos para clientes residenciales, comerciales e industriales.
            Nuestro equipo de electricistas certificados se dedica a brindar mano de obra segura, confiable y de alta calidad.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Nuestros Servicios</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Cableado y Recableado</li>
            <li>Actualizaciones de Paneles</li>
            <li>Instalación de Iluminación</li>
            <li>Localización y Reparación de Fallas Eléctricas</li>
            <li>Instalación de Generadores</li>
            <li>y más...</li>
          </ul>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contáctenos Hoy</h2>
          <p className="text-gray-700 mb-4">
            Para servicios eléctricos confiables y profesionales, contáctenos.
          </p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Obtenga una Cotización Gratis
          </button>
        </section>
        </main>
        <footer className="bg-gray-800 text-white py-8 mt-8">
          <div className="container mx-auto px-4 text-center">
            <nav className="mb-4">
              <a href="#terminos" className="text-gray-300 hover:text-white px-2">Términos de Servicio</a>
              <a href="#privacidad" className="text-gray-300 hover:text-white px-2">Política de Privacidad</a>
            </nav>
            <p>&copy; 2023 Su Compañía de Servicios Eléctricos. Todos los derechos reservados.</p>
            <p className="mt-2">Sitio web diseñado por [Su Nombre/Compañía]</p>
          </div>
        </footer>
    </div>
  )
}

export default Home
