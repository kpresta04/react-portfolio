import React from "react";
import "./contact.scss";
import HeroText from "../HeroText/HeroText.component";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	root: {
		width: "100%",
		maxWidth: 800,
		minHeight: "50vh",
		justifyContent: "center",
		textAlign: "center",
		margin: "0 auto",
	},

	links: {
		textDecoration: "underline",

		"&:hover": {
			color: "#3f51b5",
		},
	},
});

export default function Contact() {
	const classes = useStyles();
	return (
		<div className="fade-in-fast">
			<section id="contact">
				<HeroText text="Get in Touch" />

				<div className={classes.root}>
					<Typography variant="h4" gutterBottom>
						Send me an{" "}
						<a className={classes.links} href="mailto:kpresta04@gmail.com">
							email
						</a>
						{", "}
						or connect on{" "}
						<a
							className={classes.links}
							href="https://www.linkedin.com/in/kellen-presta-986215198/"
						>
							LinkedIn.
						</a>
					</Typography>
				</div>
			</section>
		</div>
	);
}
