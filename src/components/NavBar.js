import React from "react";
import { Link } from "@reach/router";

function NavBar() {
	return (
		<div className="nav">
			<Link to="/" style={{ color: "white" }}>
				<img src="/assets/covid.svg" alt="" style={{ height: "6vh" }} />
				<span className="covididentifier"> COVID-19 Live Tracker</span>
			</Link>
			<ul className="nav-links">
				<Link to="/" style={{ color: "white" }}>
					<li>Home</li>
				</Link>
				<Link to="about" style={{ color: "white" }}>
					<li className="li-1">About</li>
				</Link>
				<Link to="contact" style={{ color: "white" }}>
					<li>Contact</li>
				</Link>
			</ul>
		</div>
	);
}

export default NavBar;
