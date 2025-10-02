import React from 'react';
import styles from './Map.module.css';

interface MapProps {
  locationUrl?: string;
  title?: string;
}

const Map: React.FC<MapProps> = ({
  locationUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d497.0294148971958!2d-74.0386374!3d4.7291406!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f85c7450a9421%3A0xdfe5ead31cee5a52!2sCentro%20Comercial%20Capri%20Express!5e0!3m2!1sen!2sco!4v1748126600899!5m2!1sen!2sco",
  title = "ISIS ASTROS Location"
}) => {  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <iframe
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 0
        }}
        src={locationUrl}
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
      />
    </div>
  );
};

export default Map;