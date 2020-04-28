import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderLinks() {
	return (
		<div className="headerLinks">
			<ul>
				<li>
					<NavLink to="/portfolio" activeClassName="is-active">
						portfolio
					</NavLink>
				</li>
				<li>
					<NavLink to="/skills" activeClassName="is-active">
						skills
					</NavLink>
				</li>

				<li>
					<NavLink to="/contact" activeClassName="is-active">
						contact
					</NavLink>
				</li>
			</ul>
		</div>
	);
}
