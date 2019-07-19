import React from 'react';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'



class MapConatiner extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props)
    this.map = L.map('mapView', {
      center: [49.8419, 24.0315],
      zoom: 13,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    })

  }

  render() {
    return (<div id='mapView' style={{height: '100vh', width: '100%', position: 'absolute' }}></div>)
  }

} 



export default MapConatiner;
