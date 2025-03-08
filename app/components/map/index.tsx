'use client'
// components/Map.tsx
import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map() {
  useEffect(() => {
    // Correct coordinates from Google
    const correctLatitude = 38.00142926899376;
    const correctLongitude = -84.8650235739037;

    // Initialize the map with the correct coordinates
    const map = L.map('map').setView([correctLatitude, correctLongitude], 15); // Use correct coordinates

    // Add a tile layer (you can use OpenStreetMap or any other tile layer)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Define a custom icon for the marker
    const customIcon = L.icon({
      iconUrl: '/marker.png', // Path to your custom marker image
      iconSize: [40, 40], // Size of the icon
      iconAnchor: [20, 40], // Point of the icon which will correspond to the marker's location
      popupAnchor: [0, -40], // Point from which the popup should open relative to the iconAnchor
    });

    // Add a marker with the custom icon at the correct coordinates
    L.marker([correctLatitude, correctLongitude], { icon: customIcon }) // Use correct coordinates
      .addTo(map)
      .bindPopup('The Della Mae Luxury Weddings and Event Venues')
      .openPopup();

    // Cleanup function to remove the map when the component is unmounted
    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" className='z-0' style={{ height: '400px', width: '100%' }} />;
}