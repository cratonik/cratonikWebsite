import { Link } from "react-router-dom";
import style from "./footer.module.css";
import CTA from "../CTA/CTA";
import { Linkbox } from "./linkBox/Linkbox";
import styles from "./linkBox/linkBox.module.css";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer>
			<div className={style.footerLeft}>
				<div className={style.footerName}>
                    <Link to="/" className={style.logo}>
                        <div className={style.logoimg}></div>
                        Cratonik
                    </Link>
                    <div className={style.tagLine}>
                        Your trusted development & professional dev partner
                    </div>
                </div>
				<span>&copy; {currentYear} Cratonik</span>
			</div>
			<div className={style.footerRight}>
				<div className={style.footerLinks}>
					<Linkbox />
					<Linkbox />
					<div className={styles.linkBox} >
						<h3>Follow Us</h3>
						<ul>
							<li>
								<Link
									to="https://www.linkedin.com/in/chaitanyashimpi/"
									target="_blank"
								>
									Linkedin
									<i className="fab fa-linkedin"></i>
								</Link>
							</li>
							<li>
								<Link to="https://www.instagram.com/chaitanyashimpi/"
									target="_blank">
									Instagram <i className="fab fa-instagram"></i>
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<CTA />
			</div>
		</footer>
	);
};

export default Footer;
