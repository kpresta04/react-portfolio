// export default function Portfolio() {
// 	return (
// 		<div className="projects">
// 			<h1>Project Portfolio</h1>

// 			{projects.map((el, index) => (
// 				<PortfolioItem
// 					key={index}
// 					title={el.title}
// 					image={el.image}
// 					deployedLink={el.deployedLink}
// 					gitHubLink={el.gitHubLink}
// 				/>
// 			))}
// 		</div>
// 	);
// }

import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import HeroText from "../HeroText/HeroText.component";
import Iframe from "react-iframe";

const projects = [
	{
		title: "Casino Royale",
		image: "./assets/images/blackjack.png",
		description: "Play blackjack!",
		deployedLink: "https://react-casino-royale.herokuapp.com/",
		gitHubLink: "https://github.com/kpresta04/blackjack",
	},
	{
		title: "Brewery Finder",
		image: "./assets/images/beerme400Smaller.png",
		description: "Find top recommended breweries in your area",
		deployedLink: "https://kpresta04.github.io/beerme",
		gitHubLink: "https://github.com/kpresta04/beerme",
	},
	{
		title: "Weather Dashboard",
		image: "./assets/images/weatherdash400.png",
		description:
			"Search for a city to display the current weather and a 5 day forecast.",
		deployedLink: "https://gbr-search.herokuapp.com/",
		gitHubLink: "https://github.com/kpresta04/weatherdashboard",
	},
	{
		title: "Tomato Tracker",
		image: "./assets/images/weatherdash400.png",
		description:
			"Search for a city to display the current weather and a 5 day forecast.",
		deployedLink: "https://tomato-tracker.com/",
		gitHubLink: "https://github.com/kpresta04/weatherdashboard",
	},
];

const useStyles = makeStyles((theme) => ({
	icon: {
		marginRight: theme.spacing(2),
	},
	heroContent: {
		backgroundColor: "#100e16",
		padding: theme.spacing(8, 0, 6),
	},
	heroButtons: {
		marginTop: theme.spacing(4),
	},
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	card: {
		height: "100%",
		display: "flex",
		flexDirection: "column",
	},
	cardMedia: {
		paddingTop: "56.25%", // 16:9
	},
	cardContent: {
		flexGrow: 1,
	},
	footer: {
		backgroundColor: "#100e16",
		padding: theme.spacing(6),
	},
}));

export default function Album() {
	const classes = useStyles();

	return (
		<div>
			{/* <CssBaseline /> */}

			<main className="fade-in-fast">
				{/* Hero unit */}
				<HeroText text={"Project Portfolio"} />

				{/* End hero unit */}
				<Container className={classes.cardGrid} maxWidth="lg">
					{/* <div className="mx-auto" style={{ maxWidth: "2000px" }}> */}
					{/* End hero unit */}
					<Grid container spacing={3}>
						{projects.map((project, index) => (
							<Grid item key={index} xs={12} sm={6} md={6} lg={6}>
								<Iframe
									url={project.deployedLink}
									height="450px"
									width="100%"
									scrolling="no"
									className="project-Iframe mx-auto my-4 xs:p-4  max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl
						
							 "
									// display="initial"
									// position="relative"
								/>
							</Grid>
						))}
					</Grid>
				</Container>
				{/* </div> */}
			</main>
			{/* Footer */}

			{/* End footer */}
		</div>
	);
}
