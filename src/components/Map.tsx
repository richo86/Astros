import React from 'react';

interface MapProps {
  // You can add props here later if needed, e.g., to customize the location
  locationUrl?: string;
  width?: string;
  height?: string;
  title?: string;
}

const Map: React.FC<MapProps> = ({
  locationUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.63653402037!2d-122.0862784846925!3d37.42199987982523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8d%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1678886100000!5m2!1sen!2sus", // Default: Googleplex
  width = "600",
  height = "450",
  title = "Google Maps Location"
}) => {
  return (
    <div className="map-container">
      <iframe
        src={locationUrl}
        width={width}
        height={height}
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
      ></iframe>
    </div>
  );
};

export default Map;