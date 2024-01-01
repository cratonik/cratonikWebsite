import style from "./cta.module.css";
import emoji from "../../assets/image/CTA.png";

const CTA = () => {
	return (
		<>
			<div className={style.footerCTC}>
				<img src={emoji} alt="Cratonik Call To Action" />
				<form action="">
					<label htmlFor="conversation">Start a conversation</label>
					<div className={style.formInputButton}>
						<input id="conversation" type="text" placeholder="name@mail.com" />
						<div className={style.formSubmitButton} >
							<button>
								<i className="fas fa-greater-than"></i>
							</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default CTA;
