import React from 'react';
import {Card} from 'react-bootstrap';

function Countries(props) {
    return(
        <div className = 'box'>
        <Card style={{ width: '20rem',border: 'none'}}>
          <Card.Img variant="top" src={props.src} style ={{height: '180px'}} />
          <Card.Body>
            <Card.Title style = {{fontWeight: 'bold', fontSize: '28px'}}>{props.country}</Card.Title>
            <Card.Text style = {{borderBottom: '0.02px solid grey'}}><span style ={{fontWeight: 'bold'}}>Cases: </span>{props.cases}</Card.Text>
            <Card.Text style = {{borderBottom: '0.02px solid grey'}}><span style ={{fontWeight: 'bold'}}>Recovered: </span>{props.recovered}</Card.Text>
            <Card.Text style = {{borderBottom: '0.02px solid grey'}}><span style ={{fontWeight: 'bold'}}>Deaths: </span>{props.deaths}</Card.Text>
            <Card.Text style = {{borderBottom: '0.02px solid grey'}}><span style ={{fontWeight: 'bold'}}>Active: </span>{props.active}</Card.Text>
            <Card.Text style = {{borderBottom: '0 solid grey'}}><span style ={{fontWeight: 'bold'}}>Critical: </span>{props.critical}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
}

export default Countries
