import { Link } from "react-router-dom";
import style from "./header.module.css";
import BoldButton from "../BoldButton/BoldButton";
import BellNotification from "../NotificationBell/BellNotification";


const Header = () => {



	return (
		<header>
			<Link to="/" className={style.logo}>
				<div className={style.logoimg}></div>
				Cratonik
			</Link>
			<ul>
				<li>Our Story</li>
				<li>Solutions</li>
				<li>Pricing</li>
				<li>Journal</li>
			</ul>
			<div className={style.headerContact}>
				<BoldButton text="Start a Project" />
				<BellNotification />
			</div>
		</header>
	);
};

export default Header;
