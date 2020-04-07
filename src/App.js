import React, {useEffect, useState} from 'react';
import './App.css';
import {Router, Link} from '@reach/router'
import Home from './components/Home';

function App() {
  return (
    <div>
      <Router>
        <Home path='/' />
      </Router>   
    </div>
  );
}

export default App;
