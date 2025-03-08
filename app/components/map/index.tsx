'use client'
// components/Map.tsx
import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map  ()  {
  useEffect(() => {
    // Initialize the map
    const map = L.map('map').setView([38.0336, -84.8945], 15); // Coordinates for Lawrenceburg, KY

    // Add a tile layer (you can use OpenStreetMap or any other tile layer)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    const customIcon = L.icon({
        iconUrl: '/marker.png', // Path to your custom marker image
        iconSize: [40, 40], // Size of the icon
        iconAnchor: [20, 40], // Point of the icon which will correspond to the marker's location
        popupAnchor: [0, -40], // Point from which the popup should open relative to the iconAnchor
      });

     // Add a marker with the custom icon
     L.marker([38.0336, -84.8945], { icon: customIcon }).addTo(map)
     .bindPopup('The Della Mae Luxury Weddings and Event Venues')
     .openPopup();


    // Cleanup function to remove the map when the component is unmounted
    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" className='z-0' style={{ height: '400px', width: '100%' }} />;
};

