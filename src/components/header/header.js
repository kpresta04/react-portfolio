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

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, [windowWidth]);

	return (
		<div className="header">
			<div className="headerLinks">
				<Link style={{ paddingLeft: "1em" }} id="homeLink" to="/">
					Kellen Presta
				</Link>
			</div>
			{windowWidth > 800 && <HeaderLinks />}
		</div>
	);
};

export default Header;
