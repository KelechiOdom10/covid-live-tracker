import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import About from "./components/About";
import CountryDetailPage from "./components/CountryDetailPage";

function App() {
	return (
		<div>
			<NavBar />
			<Router>
				<Home path="/" />
				<Contact path="contact" />
				<About path="about" />
				<CountryDetailPage path="countries/:countryName" />
			</Router>
		</div>
	);
}

export default App;
