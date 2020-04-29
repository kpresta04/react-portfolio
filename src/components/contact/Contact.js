import React from "react";
import "./contact.scss";

export default function Contact() {
	return (
		<div>
			<section id="contact">
				<h3>Get in Touch</h3>

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
