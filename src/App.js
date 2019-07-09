import React, { useState } from 'react';
import nanoid from 'nanoid';
import axios from 'axios';
import './App.css';

function App() {
  const [locationId, setLocationId] = useState(nanoid(8));

  const pushToDb = () => {
    const baseUrl = 'http://localhost:3001/create/';
    axios.post(baseUrl + locationId).then(response => console.log(response));
  };

  return (
    <>
      <button onClick={() => setLocationId(nanoid(8))}>refresh</button>

      {locationId}
      <button onClick={pushToDb}>submit</button>
    </>
  );
}

export default App;
