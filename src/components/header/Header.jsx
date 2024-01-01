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
				<li onClick={() => setmenu('-100%')}>
					<Link to="/">Our Story</Link>
				</li>
				<li onClick={() => setmenu('-100%')}>
					<Link to="/">Solutions</Link>
				</li>
				<li onClick={() => setmenu('-100%')}>
					<Link to="/">Pricing</Link>
				</li>
				<li onClick={() => setmenu('-100%')}>
					<Link to="/">Journal</Link>
				</li>
			</ul>
			<div className={style.headerContact}>
				<BoldButton text="Start a Project" hide={menu} />
				<BellNotification />
				<div className={style.menu} onClick={handleMenu} style={{height: menu !== 0 ? "": "2px", background: menu !== 0 ? "": "white", border: menu !== 0 ? "": "0px", transform: menu !== 0 ? "": "rotate(45deg)"}}>
					<span className={style.menuIcon} style={{transform: menu !== 0 ? "": "rotate(90deg)"}}></span>
				</div>
			</div>
		</header>
	);
};

export default Header;
