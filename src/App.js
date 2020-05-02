import React from "react";
import LandingImage from "./components/LandingImage/LandingImage.component";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills.component";
import Contact from "./components/contact/Contact";
import IntroPara from "./components/IntroPara/IntroPara.component";
import LazyLoad from "react-lazyload";

function App() {
	return (
		<div className="App">
			<LandingImage />
			<IntroPara />
			<LazyLoad height={800} offset={200}>
				<Portfolio />
			</LazyLoad>

			<Skills />

			<Contact />
		</div>
	);
}

export default App;
