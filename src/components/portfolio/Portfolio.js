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

const projects = [
	{
		title: "Blackjack App",
		image: "./assets/images/blackjack.png",
		description: "Play blackjack!",
		deployedLink: "https://radiant-harbor-37445.herokuapp.com/",
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
		deployedLink: "https://kpresta04.github.io/weatherdashboard",
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
		<React.Fragment>
			{/* <CssBaseline /> */}

			<main className="fade-in">
				{/* Hero unit */}
				<HeroText text={"Project Portfolio"} />
				<Container className={classes.cardGrid} maxWidth="md">
					{/* End hero unit */}
					<Grid container spacing={4}>
						{projects.map((project, index) => (
							<Grid item key={index} xs={12} sm={6} md={4}>
								<Card className={classes.card}>
									<CardMedia
										className={classes.cardMedia}
										image={project.image}
										title={project.title}
									/>
									<CardContent className={classes.cardContent}>
										<Typography gutterBottom variant="h5" component="h2">
											{project.title}
										</Typography>
										<Typography>{project.description}</Typography>
									</CardContent>
									<CardActions>
										<Button size="small" color="primary">
											<Link href={project.deployedLink}>Demo</Link>
										</Button>
										<Button size="small" color="primary">
											<Link href={project.gitHubLink}>Github</Link>
										</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</main>
			{/* Footer */}

			{/* End footer */}
		</React.Fragment>
	);
}
