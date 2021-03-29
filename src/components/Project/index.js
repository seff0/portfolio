import React from "react";

function Project(props) {
	return (
		<div className="col-lg-6">
			<a href={props.deployment}>
				<img
					src={props.screen}
					className="float-start screen"
					alt={props.title}
				/>
			</a>
			<p>
				{props.title}
				<br />
				{props.description}
				<br />
				Role: {props.role}
				<br />
				Tools/Tech: {props.tools}
			</p>
			<a href={props.href} className="personal-link" target="_blank">
				View on GitHub
			</a>
		</div>
	);
}

export default Project;
