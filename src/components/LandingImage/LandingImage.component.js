import React, { useEffect, useState } from "react";
import "./landingImage.scss";
import { Link } from "react-router-dom";

export default function LandingImage() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, [windowWidth]);
	return (
		<div className="landingImageDiv">
			{windowWidth > 600 ? (
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
			) : (
				<picture>
					<source
						srcSet="
    ./assets/images/compTall.webp"
						type="image/webp"
					/>

					<img
						alt="computer"
						src="
    ./assets/images/compTall.jpg"
					></img>
				</picture>
			)}
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
