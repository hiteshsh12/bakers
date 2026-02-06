// MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const position = [28.6978, 77.1525]; // Latitude and Longitude

  return (
    <MapContainer center={position} zoom={15} style={{height:'100%',width:'100%'}}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Bakersvilla.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
