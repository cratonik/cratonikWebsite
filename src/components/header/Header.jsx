import { Link } from "react-router-dom";
import style from "./header.module.css";
import BoldButton from "../BoldButton/BoldButton";
import BellNotification from "../NotificationBell/BellNotification";
import { useState } from "react";

const Header = () => {
	const [menu, setmenu] = useState("-100%");

	const handleMenu = () => {
		menu === 0 ? setmenu("-100%") : setmenu(0);
	};

	return (
		<header>
			<Link to="/" className={style.logo}>
				<div className={style.logoimg}></div>
				Cratonik
			</Link>
			<ul className={style.menuOpener} style={{ right: menu }}>
				<li>
					<Link to="/">Our Story</Link>
				</li>
				<li>
					<Link to="/">Solutions</Link>
				</li>
				<li>
					<Link to="/">Pricing</Link>
				</li>
				<li>
					<Link to="/">Journal</Link>
				</li>
			</ul>
			<div className={style.headerContact}>
				<BoldButton text="Start a Project" hide={menu} />
				<BellNotification />
				<div className={style.menu} onClick={handleMenu}>
					<span className={style.menuIcon}></span>
				</div>
			</div>
		</header>
	);
};

export default Header;
