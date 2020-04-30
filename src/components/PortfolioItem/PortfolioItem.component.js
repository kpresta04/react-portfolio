import React from "react";
import "./portfolioItem.scss";

export default function PortfolioItem(props) {
	return (
		<div>
			<h3>{props.title}</h3>
			{props.image}
			<a style={{ display: "inline-block" }} href={props.deployedLink}>
				Live Demo
			</a>
			<h4 style={{ display: "inline-block" }}>|</h4>
			<a href={props.gitHubLink} style={{ display: " inline-block" }}>
				Github Repo
			</a>
		</div>
	);
}
