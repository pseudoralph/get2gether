import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapConatiner = ({ markers }) => {
  const map = useRef(null);

  useEffect(() => {
    map.current = L.map('mapView', {
      center: [45.4648493, -122.6531048],
      zoom: 13,
      layers: [L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png')]
    });
  }, []);

  useEffect(() => {
    markers.map(marker => {
      const renderedMarkers = Object.values(map.current._layers).map(
        isRendered => isRendered.options.markerId
      );

      if (!renderedMarkers.includes(marker.markerId)) {
        L.marker(marker.coords, {
          markerId: marker.markerId,
          draggable: true,
          icon: L.icon({
            iconUrl:
              'https://www.clker.com/cliparts/S/o/O/U/j/D/google-maps-marker-for-tnqctn.svg.hi.png',
            iconSize: [25, 40]
          })
        })
          .addTo(map.current)
          .on('click', e => {
            console.log(e.target);
          })
          .addEventListener('moveend', e => {
            console.log('moved finished');
          });
      }
    });
  }, [markers]);

  return (
    <div
      id='mapView'
      style={{ height: '100vh', width: '100%', gridArea: 'main' }}
    />
  );
};

export default MapConatiner;
