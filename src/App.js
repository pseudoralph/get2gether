import React, { useState } from 'react';
import nanoid from 'nanoid';
import './App.css';
import axios from 'axios';

function App() {
  const [locationId, setLocationId] = useState(nanoid(8));

  // setLocationId(() => nanoid(8));

  const formAction = e => {
    const baseUrl = 'http://localhost:3001/create/';
    e.preventDefault();
    console.log(locationId);
    axios.post(baseUrl + locationId).then(response => console.log(response));
  };

  return (
    <>
      <form
        onSubmit={event => {
          formAction(event);
        }}
      >
        <input defaultValue={locationId} />
        <button type='submit'>submit</button>
      </form>
    </>
  );
}

export default App;
