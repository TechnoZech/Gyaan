import React from "react";
import { Link } from 'react-router-dom';
import "./NavbarStyles.css";
import logo from "../assets/blacklogo.png";

function Navbar() {

	return (
		<>
			<section className="nav-section">
				<div className="nav-container">
					<div className="navbar">
                        <Link to="/"> <a href="/" className="nav-a">
                            <img src={logo} alt="logo" className="nav-logo"/>
                        </a></Link>
                        <button className="nav-logout">
                            Login
                        </button>
                    </div>
				</div>
			</section>
		</>
        
	);
}

export default Navbar;