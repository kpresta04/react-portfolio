import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

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

export default function HeroText(props) {
	const classes = useStyles();
	return (
		<div className={classes.heroContent}>
			<Container maxWidth="sm">
				<Typography
					component="h1"
					variant="h2"
					align="center"
					style={{ color: "white" }}
					gutterBottom
				>
					{props.text}
				</Typography>
			</Container>
		</div>
	);
}
