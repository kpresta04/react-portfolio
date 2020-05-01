import React from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
	footer: {
		backgroundColor: "#100e16",
		padding: theme.spacing(6),
	},
}));

function Copyright() {
	return (
		<Typography variant="body2" align="center">
			{"Copyright © "}
			{"Kellen Presta"} {new Date().getFullYear()}
			{"."}
		</Typography>
	);
}
export default function Footer() {
	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			<Typography variant="subtitle1" align="center" component="p">
				<Link href="https://github.com/kpresta04">Github</Link>{" "}
				<Link href="https://www.linkedin.com/in/kellen-presta-986215198/">
					Linkedin
				</Link>
			</Typography>
			<Copyright />
		</footer>
	);
}
