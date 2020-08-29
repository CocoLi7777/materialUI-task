import React from 'react';
import Home from './Home';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Home path="/" />
      </Router>
    </>
  );
};

export default App;
