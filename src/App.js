import React, {useState, useEffect} from 'react';
import Worldcases from './components/Worldcases.js'
import axios from 'axios';
import './App.css';
import Search from './components/Search.js';

function App() {
  const [latest, setLatest] = React.useState([]);
  const [results, setResults] = React.useState([]);
  const [searchCountry, setSearchCountry] = React.useState('')

  const handleSearch = (e) =>{
    setSearchCountry(e.target.value)
  }

  useEffect(() =>{
    axios
      .all([
        axios.get("https://corona.lmao.ninja/all"),
        axios.get("https://corona.lmao.ninja/countries")
      ])
      .then(responseArr => {
        setLatest(responseArr[0].data);
        setResults(responseArr[1].data);
      })
  }, [])

  const lastUpdated = new Date(parseInt(latest.updated)).toUTCString()

  return (
    <div className="App">
      <h1>COVID-199999999999999999999999999</h1>
      <Worldcases cases = {latest.cases} recoveries = {latest.recovered} deaths = {latest.deaths} updated = {lastUpdated} />
      <Search onChange = {handleSearch}  />
    </div>
  );
}

export default App;
