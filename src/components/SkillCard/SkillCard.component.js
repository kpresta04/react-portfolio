import React from "react";
import "./SkillCard.scss";

export default function SkillCard(props) {
	return (
		<div className="skill-card">
			<img src={props.imageURL} alt="" className="card-img" />
			<h3 className="card-title">{props.title}</h3>
			{props.list}
		</div>
	);
}
