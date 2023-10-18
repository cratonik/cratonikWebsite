import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";


const App = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		// Event handler for scroll
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		// Attach the event listener
		window.addEventListener("scroll", handleScroll);

		// Cleanup the event listener on component unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<main className={`container ${isScrolled ? "scrolled" : ""}`}>
			<Navbar isScrolled={isScrolled}/>
		</main>
	);
};

export default App;
