import React, {useState, useEffect} from 'react';
import Worldcases from './components/Worldcases.js';
import {Card} from 'react-bootstrap';
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

  const countries = results.map(result => {
    return(
      <div className = 'box'>
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={result.countryInfo.flag} style ={{height: '180px'}} />
          <Card.Body>
            <Card.Title style = {{fontWeight: 'bold', fontSize: '28px'}}>{result.country}</Card.Title>
            <Card.Text style = {{borderBottom: '0.02px solid grey'}}><span style ={{fontWeight: 'bold'}}>Cases: </span>{result.cases}</Card.Text>
            <Card.Text style = {{borderBottom: '0.02px solid grey'}}><span style ={{fontWeight: 'bold'}}>Recovered: </span>{result.recovered}</Card.Text>
            <Card.Text style = {{borderBottom: '0.02px solid grey'}}><span style ={{fontWeight: 'bold'}}>Deaths: </span>{result.deaths}</Card.Text>
            <Card.Text style = {{borderBottom: '0.02px solid grey'}}><span style ={{fontWeight: 'bold'}}>Active: </span>{result.active}</Card.Text>
            <Card.Text style = {{borderBottom: '0 solid grey'}}><span style ={{fontWeight: 'bold'}}>Critical: </span>{result.critical}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  })

  return (
    <div className="App">
      <h1>COVID-19 Live Tracker</h1>
      <Worldcases cases = {latest.cases} recoveries = {latest.recovered} deaths = {latest.deaths} updated = {lastUpdated} />
      <Search onChange = {handleSearch}  />
      <div className= 'worldstats'>{countries}</div>
    </div>
  );
}

export default App;
