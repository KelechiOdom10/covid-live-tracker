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

	const countryInfo = countryDetails.map((result, index) => {
		const aliases = result.altSpellings.join(" ,");
		const countryPopulation = result.population.toLocaleString(
			navigator.language,
			{
				minimumFractionDigits: 0,
			}
		);
		return (
			<CountryInfo
				key={index}
				src={result.flag}
				name={result.name}
				aliases={aliases}
				capital={result.capital}
				region={result.region}
				subregion={result.subregion}
				population={countryPopulation}
			/>
		);
	});

	const countryStats = countryCovidStats.map((result, index) => {
		const countryCases = result.cases.toLocaleString(navigator.language, {
			minimumFractionDigits: 0,
		});
		const countryDeaths = result.deaths.toLocaleString(navigator.language, {
			minimumFractionDigits: 0,
		});
		const countryRecovered = result.recovered.toLocaleString(
			navigator.language,
			{
				minimumFractionDigits: 0,
			}
		);
		const countryTests = result.tests.toLocaleString(navigator.language, {
			minimumFractionDigits: 0,
		});
		const todayCases = result.todayCases.toLocaleString(navigator.language, {
			minimumFractionDigits: 0,
		});
		const todayDeaths = result.todayDeaths.toLocaleString(navigator.language, {
			minimumFractionDigits: 0,
		});
		const active = result.active.toLocaleString(navigator.language, {
			minimumFractionDigits: 0,
		});
		const critical = result.critical.toLocaleString(navigator.language, {
			minimumFractionDigits: 0,
		});

		return (
			<CountryCovidDetails
				key={index}
				cases={countryCases}
				deaths={countryDeaths}
				recovered={countryRecovered}
				tests={countryTests}
				todayCases={todayCases}
				todayDeaths={todayDeaths}
				active={active}
				critical={critical}
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
