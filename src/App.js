import React, { useState } from 'react';
import nanoid from 'nanoid';
import axios from 'axios';
import Map from './Map';

const AddLocation = ({ handleOnclick }) => {
  return (
    <>
      <button onClick={handleOnclick}>Add location</button>
    </>
  );
};

function App() {
  let [locationId, setLocationId] = useState(nanoid(8));
  let [currentLocation, setCurrentLocation] = useState(null);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation((currentLocation = { latitude, longitude }));
      });
    }
  };

  const pushToDb = () => {
    const baseUrl = 'http://localhost:3001/create/';
    axios.post(baseUrl + locationId).then(response => console.log(response));
  };

  return (
    <>
      <button onClick={() => setLocationId(nanoid(8))}>refresh</button>
      {locationId}
      <button onClick={pushToDb}>submit</button>
      <AddLocation handleOnclick={getCurrentLocation} />
      <Map markerPos={currentLocation} />
    </>
  );
}

export default App;
