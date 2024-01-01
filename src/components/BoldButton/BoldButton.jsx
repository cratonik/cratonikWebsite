import { Link } from "react-router-dom";
import style from "./bold.module.css";

const BoldButton = (props) => {
	return (
		<Link
			to="/contact"
			className={style.button}
			style={{ opacity: props.hide === 0 ? "0" : "1" }}
		>
			{props.text}
		</Link>
	);
};

export default BoldButton;
