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
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import HeroText from "../HeroText/HeroText.component";
import Iframe from "react-iframe";
import "./portfolio.scss";

const projects = [
	{
		title: "Casino Royale",
		image: "./assets/images/blackjack.png",
		description:
			"Web app for selling chips to play games. Built in MERN with Redux and Firebase. Implemented Blackjack and Slots.",
		deployedLink: "https://react-casino-royale.herokuapp.com/",
		gitHubLink: "https://github.com/kpresta04/blackjack",
	},
	{
		title: "Brewery Finder",
		image: "./assets/images/beerme400Smaller.png",
		description:
			"VanillaJS app for finding breweries in your area. Utilizes Mapbox with Foursquare API and Bulma CSS.",
		deployedLink: "https://kpresta04.github.io/beerme",
		gitHubLink: "https://github.com/kpresta04/beerme",
	},
	{
		title: "Google Books Search",
		image: "./assets/images/weatherdash400.png",
		description:
			"Web app for saving a list of your favorite books. Built in MERN with Redux and utilizes Google Books API.",
		deployedLink: "https://gbr-search.herokuapp.com/",
		gitHubLink: "https://github.com/kpresta04/weatherdashboard",
	},
	{
		title: "Tomato Tracker",
		image: "./assets/images/weatherdash400.png",
		description:
			"App for tracking productivity with the Pomodoro Technique. See if you can fill the page with tomatoes!",
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
		backgroundColor: "#edf2f7",

		margin: "0px auto",
		flexGrow: 1,
	},
	footer: {
		backgroundColor: "#100e16",
		padding: theme.spacing(6),
	},
	cardButton: {
		color: "white",
		backgroundColor: "#3c366b;",
		"&:hover": {
			backgroundColor: "#100e15",
		},
	},
	buttonLinks: {
		color: "white",
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
				<Container className={classes.cardGrid + "hello"} maxWidth="lg">
					{/* <div className="mx-auto" style={{ maxWidth: "2000px" }}> */}
					{/* End hero unit */}
					<Grid container spacing={3}>
						{projects.map((project, index) => (
							<Grid item key={index} xs={12} sm={6} md={6} lg={6}>
								<Iframe
									url={project.deployedLink}
									height="450px"
									width="100%"
									className="project-Iframe mx-auto mt-4 xs:p-4  max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl
						
							 "
									// display="initial"
									// position="relative"
								/>
								{/* <div className="card-body w-full bg-purple-100 text-black">
									{project.description}
								</div> */}
								<CardContent className={classes.cardContent}>
									<Typography
										className="text-black  xs:max-w-xs"
										gutterBottom
										variant="h5"
										component="h2"
									>
										{project.title}
									</Typography>
									<Typography className="xs:max-w-xs text-black">
										{project.description}
									</Typography>
								</CardContent>
								<CardActions className="card-links mx-auto xs:max-w-xs bg-gray-200">
									<Button
										className={classes.cardButton}
										variant="contained"
										size="large"
										color="primary"
									>
										<Link
											className={classes.buttonLinks}
											href={project.deployedLink}
										>
											WebSite
										</Link>
									</Button>
									<Button
										className={classes.cardButton}
										variant="contained"
										size="large"
									>
										<Link
											className={classes.buttonLinks}
											href={project.gitHubLink}
										>
											Github
										</Link>
									</Button>
								</CardActions>
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
