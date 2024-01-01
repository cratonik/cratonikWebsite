import { useState, useEffect } from "react";

const useScrollClass = (scrollThreshold = 1) => {
	const [scrollClass, setScrollClass] = useState("");

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > scrollThreshold) {
				setScrollClass("mainHead");
			} else {
				setScrollClass("");
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [scrollThreshold]);

	return scrollClass;
};

export default useScrollClass;
