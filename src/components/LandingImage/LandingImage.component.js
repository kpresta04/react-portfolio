import React from "react";
import "./landingImage.scss";

export default function LandingImage() {
	return (
		<div className="landingImageDiv">
			<picture>
				<source
					srcSet="
    ./assets/images/comp.webp"
					type="image/webp"
				/>

				<img
					alt="computer"
					src="
    ./assets/images/comp.jpg"
				></img>
			</picture>
		</div>
	);
}
