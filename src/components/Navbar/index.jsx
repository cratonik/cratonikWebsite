import React from "react";
import "./navbar.css";
import blacklogo from "../../assets/Group 1Cratonik (3).png";
import whitelogo from "../../assets/Group 1Cratonik (2).png";
// import { Link } from "react-router-dom";

const Navbar = (props) => {
	return (
		<div className={`navbar ${props.isScrolled ? "scrolledNavbar" : ""}`}>
			<div className="navLogoContent">
				<img
					className="navLogo"
					src={props.isScrolled ? blacklogo : whitelogo}
					alt="Cratonik Logo"
				/>
				Cratonik
			</div>
			<div className="navLinks"></div>
			<div className="navCTA">
				{/* <Link to="/">Start the Project</Link> */}
			</div>
		</div>
	);
};

export default Navbar;
