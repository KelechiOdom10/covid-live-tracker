import React, {useState, useEffect} from 'react';
import Worldcases from './components/Worldcases.js'
import axios from 'axios';
import './App.css';

function App() {
  const [latest, setLatest] = React.useState('');

  useEffect(() =>{
    axios.get('https://corona.lmao.ninja/all').then(response => setLatest(response.data))
  }, [])

  const lastUpdated = new Date(parseInt(latest.updated)).toUTCString()

  return (
    <div className="App">
      <h1>COVID-199999999999999999999999999</h1>
      <Worldcases cases = {latest.cases} recoveries = {latest.recovered} deaths = {latest.deaths} updated = {lastUpdated} />
    </div>
  );
}

export default App;
