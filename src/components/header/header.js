import React, { useState, useEffect } from "react";
import "./header.scss";
import HeaderLinks from "../HeaderLinks/HeaderLinks";
import { Link } from "react-router-dom";

const Header = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleWindowResize);
		console.log(windowWidth);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, [windowWidth]);

	return (
		<div className="header">
			<div className="headerLinks">
				<Link id="homeLink" to="/">
					Kellen Presta
				</Link>
			</div>
			<HeaderLinks />
		</div>
	);
};

export default Header;
