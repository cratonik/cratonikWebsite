import { Link } from "react-router-dom";
import style from "./linkBox.module.css";

export const Linkbox = () => {
	return (
		<div className={style.linkBox}>
			<h3>Company</h3>
			<ul>
				<li>
					<Link>About Us</Link>
				</li>
				<li>
					<Link>Cratonik Solutions</Link>
				</li>
				<li>
					<Link>Cratonik Journal</Link>
				</li>
				<li>
					<Link>Testimonials</Link>
				</li>
			</ul>
		</div>
	);
};
