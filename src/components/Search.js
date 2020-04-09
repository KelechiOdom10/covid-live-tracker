import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

function Search(props) {
	return (
		<div className="search">
			<InputGroup
				className="mb-3"
				style={{ maxWidth: "800px", margin: "0 auto" }}
			>
				<FormControl
					onChange={props.onChange}
					value={props.value}
					placeholder="Search country..."
				/>
				<InputGroup.Append>
					<Button onClick={props.onClick} variant="outline-secondary">
						Search
					</Button>
				</InputGroup.Append>
				<Button
					style={{ marginLeft: "10px" }}
					onClick={props.onDoubleClick}
					variant="secondary"
				>
					Show All
				</Button>
			</InputGroup>
		</div>
	);
}

export default Search;
