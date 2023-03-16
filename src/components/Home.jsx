import React from "react";
import "./HomeStyles.css";
import Girl from "../assets/girl.png";
import Heart from "../assets/heart.png";

function Home() {
	return (
		<section className="home_section">
        <img src={Heart} alt="heart" className="heart"/>
			<div className="home_container">
				<div className="home_content_div">
					<h1 className="home_content">
						Access <br /> the <span> knowledge <br /> and guidance</span>
					</h1>
				</div>
				<div className="home_image_div">
					<img className="home_image" src={Girl} alt="girl" />
				</div>
				<div className="home_content_div_2">
					<h1 className="home_content home_content-2">
						you need for <br /> your most <span> personal<br /> health questions. </span>
					</h1>
				</div>
			</div>
		</section>
	);
}

export default Home;
