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
				axios.get("https://corona.lmao.ninja/v2/countries?sort=cases"),
			])
			.then(responseArr => {
				setLatest([responseArr[0].data]);
				setResults(responseArr[1].data);
			});
	}, []);

	const typedToSearch = () => {
		setSearchCountry(typedCountry);
	};

	const AddComas = value => {
		return value.toLocaleString(navigator.language, {
			minimumFractionDigits: 0,
		});
	};
	const filterCountry = results.filter(item => {
		return searchCountry !== ""
			? item.country.toLowerCase().includes(searchCountry.toLowerCase())
			: item;
	});

	const countries = filterCountry.map((result, index) => {
		return (
			<Countries
				key={index}
				path={`countries/${result.country}`}
				src={result.countryInfo.flag}
				country={result.country}
				cases={AddComas(result.cases)}
				recovered={AddComas(result.recovered)}
				deaths={AddComas(result.deaths)}
				active={AddComas(result.active)}
				critical={AddComas(result.critical)}
			/>
		);
	});

	const latestInfo = latest.map((result, index) => {
		const lastUpdated = new Date(parseInt(result.updated)).toUTCString();
		return (
			<Worldcases
				key={index}
				cases={AddComas(result.cases)}
				recoveries={AddComas(result.recovered)}
				deaths={AddComas(result.deaths)}
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
