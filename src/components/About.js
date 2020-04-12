import React from "react";

function About() {
	return (
		<div className="aboutpage">
			<h1>LIVE TRACKER</h1>
			<h2>Motivation</h2>
			<p>
				The motivation behind this project was very simple. I wanted to showcase
				a project which takes into account everything I have learnt so far about
				React from state management to interacting with APIs. I wanted the
				project to be something which has meaning and would be benefitial to
				people. During this unprecedented time with the emergence of the
				Coronavirus and the impact it has had so far, I wanted to create
				something that would help people keep up with the constant increase in
				number of cases and help highlight all countries that are being affected
				and to what extent.
			</p>
			<h2>API Reference</h2>
			<p>
				The API used for this project is called the NovelCovid API and has been
				recommended by Postman, the collaboration platform for API Development.
				The GitHub link for this API can be found{" "}
				<a
					href="https://github.com/NovelCOVID/API"
					target="_blank"
					rel="noopener noreferrer"
				>
					here
				</a>
				. The NovelCovid API documentation can be found{" "}
				<a
					href="https://corona.lmao.ninja/docs/"
					target="_blank"
					rel="noopener noreferrer"
				>
					here
				</a>
				.
			</p>
			<h2>How it works</h2>
			<p>
				The functionality of the app is very simple. I am gathering the
				statistics of covid cases and deaths for each country affected and
				displaying that in the cards. Users can search specifically for the
				country they want to see and click on search and only the information
				for that country will be displayed. <br />
				<br />
				To make the search functionality easy for users that are not sure of the
				right spelling for the country they are looking an extra feature was
				added where once they know a couple of consecutive letters in the
				country's name and search for that a list of countries that includes
				that string of text will be displayed. The search bar is also case
				insensitive so no matter how the text is typed it will return the right
				results.
				<br />
				<br />
				There is a 'Show All' button which acts as a reset button and displays
				all the countries once again after a user has searched for a specific
				country or a list of countries. A demo of the app has been included
				below to show how it all works:
			</p>
			<img className="aboutimg" src="/assets/coviddemo.gif" alt=""></img>
			<h2>Technologies</h2>
			<p>
				The languages as well as the libraries used can be seen below:
				<ul>
					<li>JavaScript</li>
					<li>React JS</li>
					<li>React Bootstrap</li>
					<li>Reach Router</li>
				</ul>
			</p>
			<h2>Installation/Setup</h2>
			<p>
				To get up and running you need to create a new React app from your
				terminal with <code>npm</code> (or <code>yarn</code> if you prefer):
			</p>
			<code>
				npx create-react-app <br />
				my-app <br />
				cd my-app npm start
			</code>
			<br />
			<br />
			<p>
				{" "}
				The project has a couple of dependencies that need to be set up to make
				this work. The first is React Bootstrap:
			</p>
			<code>npm install react-bootstrap bootstrap</code>
			<br />
			<br />
			<p>
				How and which Bootstrap styles you include is up to you, but the
				simplest way is to include the latest styles from the CDN. More
				information on how to get started with React Bootstrap can be found{" "}
				<a
					href="https://react-bootstrap.github.io/getting-started/introduction"
					target="_blank"
					rel="noopener noreferrer"
				>
					here
				</a>
				.
			</p>
			<p>
				The last thing needed to be installed is Reach Router, a small, smart
				and simple routing utility:{" "}
			</p>
			<code>npm install @reach/router</code>
			<br />
			<br />
			<p>
				Further information on hwow to get started with this and tutorials can
				be found{" "}
				<a
					href="https://reach.tech/router"
					target="_blank"
					rel="noopener noreferrer"
				>
					here
				</a>
				.
			</p>
			<h2>Contributions</h2>
			<p>
				How you can contribute:
				<ul>
					<li>
						<strong>Step 1: </strong>You can fork this repo or clone this to
						your local machine using this{" "}
						<a
							href="https://github.com/KelechiOdom10/covid-live-tracker"
							target="_blank"
							rel="noopener noreferrer"
						>
							link
						</a>
					</li>
					<li>
						<strong>Step 2: </strong>Hack away and make changes
					</li>
					<li>
						<strong>Step 3: </strong> Create a new pull request using this{" "}
						<a
							href="https://github.com/KelechiOdom10/covid-live-tracker/compare"
							target="_blank"
							rel="noopener noreferrer"
						>
							link
						</a>{" "}
					</li>
				</ul>
			</p>
			<h2>Credits</h2>
			<p>
				I'd like to say thank you to Richard Ng, my Whitehat Apprenticeship
				teacher who helped with this alongside all my teammates.
			</p>
			<h2>Contact</h2>
			<p>
				Feel free to reach out to me via email{" "}
				<a
					href="mailto:kelechiodom10@gmail.com?Subject=Hello%20again"
					target="_top"
				>
					here
				</a>{" "}
				. The current Contact page does not have any functionality.
			</p>
		</div>
	);
}

export default About;
