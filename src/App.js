import React, { useState } from 'react';
import nanoid from 'nanoid';
import './App.css';

function App() {
  const [locationId, setLocationId] = useState(nanoid(8));

  // setLocationId(() => nanoid(8));

  const formAction = e => {
    e.preventDefault();
    console.log(locationId);
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
