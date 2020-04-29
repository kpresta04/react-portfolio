import React from "react";
import SkillCard from "../SkillCard/SkillCard.component";
import "./skills.scss";

const skills = [
	{
		imageURL: "./assets/images/browser.png",
		title: "Front End",
		list: (
			<ul>
				<li>HTML 5</li>
				<li>CSS3 | SASS</li>
				<li>JavaScript</li>
				<li>React | Redux</li>
			</ul>
		),
	},
	{
		imageURL: "./assets/images/share.png",
		title: "Server",
		list: (
			<ul>
				<li>NodeJS</li>
				<li>Express</li>
				<li>Python</li>
			</ul>
		),
	},

	{
		imageURL: "./assets/images/database.png",
		title: "Database",
		list: (
			<ul>
				<li>PostgreSQL</li>
				<li>mySQL</li>
				<li>MongoDB</li>
			</ul>
		),
	},
	{
		imageURL: "./assets/images/deploy.png",
		title: "Deployment",
		list: (
			<ul>
				<li>System Design</li>
				<li>Heroku</li>
				<li>Firebase</li>
				<li>Git</li>
			</ul>
		),
	},
];

export default function Skills() {
	return (
		<div className="skillCardDiv">
			{skills.map((el, index) => (
				<SkillCard
					key={index}
					imageURL={el.imageURL}
					title={el.title}
					list={el.list}
				/>
			))}
		</div>
	);
}
