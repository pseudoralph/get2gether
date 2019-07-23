import React, { useState, useRef } from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import Admin from './components/AdminPortal';

const Test = props => {
  const {
    match: {
      params: { code }
    }
  } = props;
  console.log(code);
  return <>got it</>;
};

function App() {
  return (
    <HashRouter>
      <Redirect exact path='/' to='/create' />

      <Route exact path='/create' component={Admin} />
      <Route path='/attend/:code' component={Test} />
    </HashRouter>
  );
}

export default App;
