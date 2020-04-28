import React, { useState, useEffect } from "react";
import "./header.scss";
import HeaderLinks from "../HeaderLinks/HeaderLinks";

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
			<h1>Kellen Presta</h1>
			<HeaderLinks />
		</div>
	);
};

export default Header;
