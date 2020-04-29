import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/header/header";
import App from "../App";
import Portfolio from "../components/portfolio/Portfolio";
import Skills from "../components/skills/Skills.component";
import Contact from "../components/contact/Contact";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";

export default function AppRouter() {
	return (
		<BrowserRouter>
			<div>
				<Header />

				<Switch>
					<Route path="/" component={App} exact={true} />
					<Route path="/portfolio" component={Portfolio} />
					<Route path="/skills" component={Skills} />
					<Route path="/contact" component={Contact} />
					<Route component={NotFoundPage} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}
