import React, { useEffect } from "react";
import Worldcases from "./Worldcases.js";
import axios from "axios";
import Search from "./Search.js";
import Countries from "./Countries";

function Home() {
	const [latest, setLatest] = React.useState([]);
	const [results, setResults] = React.useState([]);
	const [searchCountry, setSearchCountry] = React.useState("");
	const [typedCountry, setTypedCountry] = React.useState("");

	const handleSearch = e => {
		setTypedCountry(e.target.value);
	};

	useEffect(() => {
		axios
			.all([
				axios.get("https://corona.lmao.ninja/v2/all"),
				axios.get("https://corona.lmao.ninja/v2/countries"),
			])
			.then(responseArr => {
				setLatest([responseArr[0].data]);
				setResults(responseArr[1].data);
			});
	}, []);

	const typedToSearch = () => {
		setSearchCountry(typedCountry);
	};

	const filterCountry = results.filter(item => {
		return searchCountry !== ""
			? item.country.toLowerCase().includes(searchCountry.toLowerCase())
			: item;
	});

	const countries = filterCountry.map((result, index) => {
		const resultCases = result.cases.toLocaleString(navigator.language, {
			minimumFractionDigits: 0,
		});
		const resultRecovered = result.recovered.toLocaleString(
			navigator.language,
			{
				minimumFractionDigits: 0,
			}
		);
		const resultDeaths = result.deaths.toLocaleString(navigator.language, {
			minimumFractionDigits: 0,
		});
		const resultActive = result.active.toLocaleString(navigator.language, {
			minimumFractionDigits: 0,
		});
		const resultCritical = result.critical.toLocaleString(navigator.language, {
			minimumFractionDigits: 0,
		});
		return (
			<Countries
				key={index}
				path={`countries/${result.country}`}
				src={result.countryInfo.flag}
				country={result.country}
				cases={resultCases}
				recovered={resultRecovered}
				deaths={resultDeaths}
				active={resultActive}
				critical={resultCritical}
			/>
		);
	});

	const latestInfo = latest.map((result, index) => {
		const lastUpdated = new Date(parseInt(result.updated)).toUTCString();
		const latestCases = result.cases.toLocaleString(navigator.language, {
			minimumFractionDigits: 0,
		});
		const latestRecovered = result.recovered.toLocaleString(
			navigator.language,
			{
				minimumFractionDigits: 0,
			}
		);
		const latestDeaths = result.deaths.toLocaleString(navigator.language, {
			minimumFractionDigits: 0,
		});
		return (
			<Worldcases
				key={index}
				cases={latestCases}
				recoveries={latestRecovered}
				deaths={latestDeaths}
				updated={lastUpdated}
			/>
		);
	});

	const reset = () => {
		setSearchCountry("");
		setTypedCountry("");
	};

	return (
		<div className="App">
			<h1>COVID-19 Live Tracker</h1>
			<>{latestInfo}</>
			<Search
				onChange={handleSearch}
				value={typedCountry}
				onClick={typedToSearch}
				onDoubleClick={reset}
			/>
			<div className="worldstats">{countries}</div>
		</div>
	);
}

export default Home;
