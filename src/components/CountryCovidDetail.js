import React from "react";
import { Card } from "react-bootstrap";

function CountryCovidDetails(props) {
	return (
		<div className="covidGrid">
			<Card
				border="dark"
				style={{
					width: "150px",
					textAlign: "center",
					paddingBottom: "1em",
					boxShadow: " 4px 6px 11px -5px rgba(0,0,0,0.75)",
				}}
			>
				<Card.Header>Cases</Card.Header>
				<Card.Text>{props.cases}</Card.Text>
			</Card>
			<Card
				border="danger"
				style={{
					width: "150px",
					textAlign: "center",
					paddingBottom: "1em",
					boxShadow: "4px 6px 11px -5px rgba(0,0,0,0.75)",
				}}
			>
				<Card.Header>Deaths</Card.Header>
				<Card.Text>{props.deaths}</Card.Text>
			</Card>
			<Card
				border="success"
				style={{
					width: "150px",
					textAlign: "center",
					paddingBottom: "1em",
					boxShadow: "4px 6px 11px -5px rgba(0,0,0,0.75)",
				}}
			>
				<Card.Header>Recovered</Card.Header>
				<Card.Text>{props.recovered}</Card.Text>
			</Card>
			<Card
				border="info"
				style={{
					width: "150px",
					textAlign: "center",
					paddingBottom: "1em",
					boxShadow: "4px 6px 11px -5px rgba(0,0,0,0.75)",
				}}
			>
				<Card.Header>Tests</Card.Header>
				<Card.Text>{props.tests}</Card.Text>
			</Card>
			<Card
				border="warning"
				style={{
					width: "150px",
					textAlign: "center",
					paddingBottom: "1em",
					boxShadow: "4px 6px 11px -5px rgba(0,0,0,0.75)",
				}}
			>
				<Card.Header>Today's Cases:</Card.Header>
				<Card.Text>{props.todayCases}</Card.Text>
			</Card>
			<Card
				border="danger"
				style={{
					width: "150px",
					textAlign: "center",
					paddingBottom: "1em",
					boxShadow: "4px 6px 11px -5px rgba(0,0,0,0.75)",
				}}
			>
				<Card.Header>Today's Deaths:</Card.Header>
				<Card.Text>{props.todayDeaths}</Card.Text>
			</Card>
			<Card
				border="warning"
				style={{
					width: "150px",
					textAlign: "center",
					paddingBottom: "1em",
					boxShadow: "4px 6px 11px -5px rgba(0,0,0,0.75)",
				}}
			>
				<Card.Header>Active</Card.Header>
				<Card.Text>{props.active}</Card.Text>
			</Card>
			<Card
				border="danger"
				style={{
					width: "150px",
					textAlign: "center",
					paddingBottom: "1em",
					boxShadow: "4px 6px 11px -5px rgba(0,0,0,0.75)",
				}}
			>
				<Card.Header>Critical:</Card.Header>
				<Card.Text>{props.critical}</Card.Text>
			</Card>
		</div>
	);
}

export default CountryCovidDetails;
