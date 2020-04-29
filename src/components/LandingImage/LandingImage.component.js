import React from "react";
import "./landingImage.scss";
import { Link } from "react-router-dom";

export default function LandingImage() {
	return (
		<div className="landingImageDiv">
			<picture>
				<source
					srcSet="
    ./assets/images/comp.webp"
					type="image/webp"
				/>

				<img
					alt="computer"
					src="
    ./assets/images/comp.jpg"
				></img>
			</picture>
			<div className="welcome-text">
				<h1 id="welcomeBenefit" className="leading">
					I bring your projects to life
				</h1>
				<h3 id="welcomeSubtitle">Full Stack Engineer</h3>
				<Link to="/portfolio">
					<button id="welcomeButton" className="button">
						View My Work
					</button>
				</Link>
			</div>
		</div>
	);
}
