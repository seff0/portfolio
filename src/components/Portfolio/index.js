import React from "react";
import Project from "../Project";
import Screen1 from "../../images/project1screen.jpeg";
import Screen2 from "../../images/screen2";
import Screen3 from "../../images/weather-dashboard.png";
import Screen4 from "../../images/dayplanner.PNG";
import Screen5 from "../../images/generateReadme.PNG";
import Screen6 from "../../images/rosterGenerator.PNG";

function Portfolio() {
	const projects = [
		{
			title: "Music Locator",
			description:
				"This application uses the Last.FM and audioDB APIs to retrieve	information about a musical artist.",
			screen: { Screen1 },
			href: "https://github.com/Jdouville8/DUFullStack-Project1",
			deployment: "https://jdouville8.github.io/DUFullStack-Project1/",
			role: "Back end engineer",
			tools: "JavaScript, HTML, CSS, Materialize, jQuery, Google Fonts",
		},
		{
			title: "Galaxy Getaway",
			description:
				"Enjoy a scenic Getaway through the Galaxy! For group project #2 in	this bootcamp, my peers and I constructed an application to take the user on a guided tour of space. This application features Node.js, Handlebars, MySQL and Sequelize for database handling, as well as Session,  Passport, and bcrypt for user authentication.",
			screen: { Screen2 },
			href: "https://github.com/seff0/DUFullStackProject2",
			deployment: "https://galaxy-getaway.herokuapp.com/",
			role: "Back end engineer",
			tools:
				"JavaScript, HTML, CSS, Node, Handlebars, MySQL, Sequelize, Express",
		},
		{
			title: "Weather Dashboard",
			description:
				"Using openweather API, this application retrieves the current weather as well as a 5 day forecast for a city of the user’s choosing",
			screen: { Screen3 },
			href: "https://github.com/seff0/openWeatherDashboard",
			deployment: "https://seff0.github.io/openWeatherDashboard/",
			role: "Sole author",
			tools: "JavaScript, HTML, Bootstrap, jQuery, openweather API",
		},
		{
			title: "Day Planner",
			description:
				"This day planner uses moment.js to dynamically color-code the time blocks based on the current time of day.",
			screen: { Screen4 },
			href: "https://github.com/seff0/dayPlannerJS",
			deployment: "https://seff0.github.io/dayPlannerJS/",
			role: "Sole author",
			tools: "JavaScript, HTML, CSS, moment.js",
		},
		{
			title: "README Generator",
			description:
				"This command line application asks the user several questions pertaining to their project and dynamically creates a markdown file including license.",
			screen: { Screen5 },
			href: "https://github.com/seff0/generateREADME",
			deployment: "/",
			role: "Sole author",
			tools: "JavaScript, Node.js, Inquirer, moment.js",
		},
		{
			title: "Team Roster Generator",
			description:
				"This application generates a roster of team members based on user input. User can create a manager and any number of engineer or intern roles. Information is output from command line into an HTML format.",
			screen: { Screen6 },
			href: "https://github.com/seff0/teamRosterGenerator",
			deployment: "/",
			role: "Sole author",
			tools: "JavaScript, Inquirer, jest, HTML",
		},
	];

	return (
		<main class="container">
			<section class="row">
				<div class="col-lg-8">
					<h1>Portfolio</h1>
				</div>
			</section>
			<section class="row">
				{projects.map((project) => (
					<Project
						title={project.title}
						description={project.description}
						screen={project.screen}
						href={project.href}
						deployment={project.deployment}
						role={project.role}
						tools={project.tools}
					/>
				))}
			</section>
		</main>
	);
}

export default Portfolio;
