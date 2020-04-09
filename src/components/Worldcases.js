import React from "react";
import { Card } from "react-bootstrap";

function Worldcases(props) {
	return (
		<div className="worldstats">
			<Card
				bg={"dark"}
				text={"white"}
				style={{ width: "17rem", height: "10rem" }}
			>
				<Card.Body>
					<Card.Title>Cases</Card.Title>
					{props.cases}
				</Card.Body>
				<Card.Footer>Last Updated: {props.updated}</Card.Footer>
			</Card>

			<Card
				bg={"danger"}
				text={"white"}
				style={{ width: "17rem", height: "10rem" }}
			>
				<Card.Body>
					<Card.Title>Deaths</Card.Title>
					{props.deaths}
				</Card.Body>
				<Card.Footer>Last Updated: {props.updated}</Card.Footer>
			</Card>

			<Card
				bg={"success"}
				text={"white"}
				style={{ width: "17rem", height: "10rem" }}
			>
				<Card.Body>
					<Card.Title>Recoveries</Card.Title>
					{props.recoveries}
				</Card.Body>
				<Card.Footer>Last Updated: {props.updated}</Card.Footer>
			</Card>
		</div>
	);
}

export default Worldcases;
