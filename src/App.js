import React, { useState, useEffect } from 'react';
import nanoid from 'nanoid';
import axios from 'axios';
import Map from './Map';

function App() {
  let [locationId, setLocationId] = useState(nanoid(8));
  let [geoLocation, setGeoLocation] = useState(null);
  
  const pushToDb = () => {
    const baseUrl = 'http://localhost:3001/create/';
    axios.post(baseUrl + locationId).then(response => console.log(response));
  };
  
  const getLatLong = () => {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position)=> {
          const { latitude, longitude } = await position.coords
          setGeoLocation(geoLocation={latitude,longitude})
        })
      }
    }
    
  useEffect(getLatLong,[])
  return (<>
    <button onClick={() => setLocationId(nanoid(8))}>refresh</button>
    {locationId}
    <button onClick={pushToDb}>submit</button>
    <Map currentPos={geoLocation}/>
  </>
  );
}

export default App;
