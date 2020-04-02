import React, {useEffect, useState} from 'react';
import Worldcases from './components/Worldcases.js';
import axios from 'axios';
import './App.css';
import Search from './components/Search.js';
import Countries from './components/Countries.js';

function App() {
  const [latest, setLatest] = React.useState([]);
  const [results, setResults] = React.useState([]);
  const [searchCountry, setSearchCountry] = React.useState('');
  const [typedCountry, setTypedCountry] = React.useState('')

  const handleSearch = (e) =>{
    setTypedCountry(e.target.value)
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
  }, []);

  const lastUpdated = new Date(parseInt(latest.updated)).toUTCString();

  const typedToSearch = () => {
    setSearchCountry(typedCountry)
  };

  const filterCountry = results.filter(item => {
    return searchCountry !== '' ? item.country.toLowerCase().includes(searchCountry.toLowerCase()) : item
  });

  const countries = filterCountry.map(result => {
    return(
      <Countries 
        src={result.countryInfo.flag} 
        country={result.country} 
        cases = {result.cases} 
        recovered = {result.recovered} 
        deaths = {result.deaths}
        active = {result.active}
        critical = {result.critical}
      />
    )
  })



  return (
    <div className="App">
      <h1>COVID-19 Live Tracker</h1>
      <Worldcases cases = {latest.cases} recoveries = {latest.recovered} deaths = {latest.deaths} updated = {lastUpdated} />
      <Search onChange = {handleSearch} value = {typedCountry} onClick = {typedToSearch} />
      <div className= 'worldstats'>{countries}</div>
    </div>
  );
}

export default App;
