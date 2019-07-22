import React, { useState, useRef } from 'react';
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

const Sidebar = ({ children, markers }) => {
  const styling = {
    width: '100%',
    height: '100%',
    backgroundColor: '#3b3b3b',
    gridArea: 'sidebar'
  };

  return <div style={styling}>{children}</div>;
};

function App() {
  let [locationId, setLocationId] = useState(nanoid(8));
  let [markers, setMarkers] = useState([]);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async position => {
        const { latitude, longitude } = await position.coords;
        setMarkers([
          ...markers,
          { markerId: nanoid(12), coords: [latitude, longitude] }
        ]);
      });
    }
  };

  const pushToDb = () => {
    const baseUrl = 'http://localhost:3001/create/';
    axios.post(baseUrl + locationId).then(response => console.log(response));
  };

  return (
    <div
      style={{
        backgroundColor: 'red',
        display: 'grid',
        gridTemplateColumns: '[main] 75% [sidebar] 25%'
      }}
    >
      <Map markerPos={getCurrentLocation} markers={markers} />

      <Sidebar markers={markers}>
        <div>
          <button onClick={() => setLocationId(nanoid(8))}>refresh</button>
          {locationId}
          <button onClick={pushToDb}>submit</button>
        </div>
        <div>
          <AddLocation handleOnclick={getCurrentLocation} />
        </div>
        <ul>
          {markers.map(marker => (
            <li key={marker.markerId}>{marker.markerId}</li>
          ))}
        </ul>
      </Sidebar>
    </div>
  );
}

export default App;
