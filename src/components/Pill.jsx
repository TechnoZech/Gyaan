import React from "react";
import "./PillStyles.css";
import Navbar from "./Navbar";
import Search from "./SearchAndNavigation";
import PillData from "./PillData";
import { Link } from "react-router-dom";

function Pill() {
	return (
		<>
			<Navbar />
			<section className="pill_section">
				<div className="pill_container">
					{PillData.pills.map((item, index) => {
						return (
							<Link to={item.url} className="pills" key={index}>
								<div className="pill_wrap_2">
									<div className="pill_warp">
										<p className="pill_name">{item.name}</p>
										<div className="pill_help">
											<i class="fa-regular fa-circle-question"></i>
										</div>
									</div>
								</div>
							</Link>
						);
					})}
				</div>
			</section>
			<Search />
		</>
	);
}

export default Pill;
