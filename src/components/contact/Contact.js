import React from "react";
import "./contact.scss";
import HeroText from "../HeroText/HeroText.component";

export default function Contact() {
	return (
		<div>
			<section id="contact">
				<HeroText text="Get in Touch" />

				<form
					id="contactForm"
					onSubmit={(e) => {
						e.preventDefault();
						console.log("submitted");
					}}
				>
					<input name="name" type="text" placeholder="NAME" />
					<input name="email" type="email" placeholder="EMAIL" />
					<textarea
						name="message"
						placeholder="YOUR MESSAGE"
						cols="30"
						rows="10"
					></textarea>
					<button id="sendBtn" className="button">
						Send
						<img
							style={{ height: "1em" }}
							id="planeImg"
							alt="Send Button"
							src="./assets/images/planeHover.jpg"
						></img>
					</button>
				</form>
			</section>
		</div>
	);
}
