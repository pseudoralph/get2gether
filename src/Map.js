import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapConatiner = ({ markerPos }) => {
  const map = useRef(null);
  const marker = useRef(null);

  useEffect(() => {
    map.current = L.map('mapView', {
      center: [45.4648493, -122.6531048],
      zoom: 13,
      layers: [L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png')]
    });
  }, []);

  if (markerPos) {
    marker.current = L.marker(Object.values(markerPos), {
      draggable: true,
      icon: L.icon({
        iconUrl:
          'https://www.clker.com/cliparts/S/o/O/U/j/D/google-maps-marker-for-tnqctn.svg.hi.png',
        iconSize: [25, 40]
      })
    })
      .addTo(map.current)
      .addEventListener('moveend', e => {
        console.log(e.target.getLatLng());
      });
  }

  return (
    <div
      id='mapView'
      style={{ height: '100vh', width: '100%', position: 'absolute' }}
    />
  );
};

export default MapConatiner;
