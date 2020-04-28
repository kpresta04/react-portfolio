import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/header/header";
import App from "../App";

export default function AppRouter() {
	return (
		<BrowserRouter>
			<div>
				<Header />
				<App />

				{/* <Switch>
					<Route path="/" component={homePage} exact={true} />
					<Route path="/signup" component={SignUpPage} />
					<Route path="/signin" component={SignInPage} />
					<Route path="/contact" component={Contact} />
					<Route path="/faq" component={FAQ} />
					<Route path="/about" component={AboutPage} />
					<Route path="/account" component={Account} />
					<Route path="/privacy" component={Privacy} />
					<Route component={NotFoundPage} />
				</Switch> */}
			</div>
		</BrowserRouter>
	);
}
