import { Link } from "react-router-dom";
import style from "./hollow.module.css";

const HollowButton = (props) => {
	return (
		<Link to="/contact" className={style.button}>
			{props.text}
		</Link>
	);
};

export default HollowButton;
