import React, { useEffect } from 'react';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const MapConatiner = ({currentPos}) => {

  useEffect(()=>{
    window.map = L.map('mapView', {
      center: [45.4648493,-122.6531048],
      zoom: 13,
      layers: [L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png')]
    })
  },[])  
  
  if (currentPos) {
    L.marker(Object.values(currentPos),{
      icon: L.icon({
        iconUrl: 'https://www.clker.com/cliparts/S/o/O/U/j/D/google-maps-marker-for-tnqctn.svg.hi.png',
        iconSize: [25, 40]
      })
    }).addTo(window.map)
  }

  return (<div id='mapView' style={{height: '100vh', width: '100%', position: 'absolute' }} ></div>)
}

export default MapConatiner;
