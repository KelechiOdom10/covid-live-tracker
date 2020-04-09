import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
	return (
		<div>
			<NavBar />
			<Router>
				<Home path="/" />
				<Contact path="contact" />
				<About path="about" />
			</Router>
		</div>
	);
}

export default App;
