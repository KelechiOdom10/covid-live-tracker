import React from "react";

function CountryInfo(props) {
	return (
		<div className="countryInfo">
			<img src={props.src} alt="country flag" className="countryFlag" />
			<div className="countryDeets">
				<h1>{props.name}</h1>
				<p>
					<b>Aliases:</b> {props.aliases}
				</p>
				<p>
					<b>Capital: </b>
					{props.capital}
				</p>
				<p>
					<b>Region:</b> {props.region}
				</p>
				<p>
					<b>Sub-region:</b> {props.subregion}
				</p>
				<p>
					<b>Population:</b> {props.population}
				</p>
			</div>
		</div>
	);
}

export default CountryInfo;
