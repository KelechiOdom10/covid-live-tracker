import React from "react";
import { useEffect } from "react";
import axios from "axios";
import CountryInfo from "./CountryInfo";
import CountryCovidDetails from "./CountryCovidDetail";

function CountryDetailPage(props) {
	const country_name = props.countryName;
	const [countryDetails, setCountryDetails] = React.useState([]);
	const [countryCovidStats, setCountryCovidStats] = React.useState([]);

	useEffect(() => {
		axios
			.all([
				axios.get(`https://restcountries.eu/rest/v2/name/${country_name}`),
				axios.get(`https://corona.lmao.ninja/v2/countries/${country_name}`),
			])
			.then(responseArr => {
				setCountryDetails(responseArr[0].data);
				setCountryCovidStats([responseArr[1].data]);
			});
	}, [country_name]);

	const AddComas = value => {
		return value.toLocaleString(navigator.language, {
			minimumFractionDigits: 0,
		});
	};

	const countryInfo = countryDetails.map((result, index) => {
		const aliases = result.altSpellings.join(" ,");

		return (
			<CountryInfo
				key={index}
				src={result.flag}
				name={result.name}
				aliases={aliases}
				capital={result.capital}
				region={result.region}
				subregion={result.subregion}
				population={AddComas(result.population)}
			/>
		);
	});

	const countryStats = countryCovidStats.map((result, index) => {
		return (
			<CountryCovidDetails
				key={index}
				cases={AddComas(result.cases)}
				deaths={AddComas(result.deaths)}
				recovered={AddComas(result.recovered)}
				tests={AddComas(result.tests)}
				todayCases={AddComas(result.todayCases)}
				todayDeaths={AddComas(result.todayDeaths)}
				active={AddComas(result.active)}
				critical={AddComas(result.critical)}
			/>
		);
	});
	return (
		<div className="countryDetailPage">
			{countryInfo}
			{countryStats}
		</div>
	);
}

export default CountryDetailPage;
