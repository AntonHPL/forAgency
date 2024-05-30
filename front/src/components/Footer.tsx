import logo from "../images/logo.svg";
import bank_logo from "../images/bank_logo.svg";
import { FC } from "react";

const Footer: FC = () => (
	<footer>
		<div className="footer__subcontainer">
			<section>
				<div>
					<img src={logo} alt="Реестры" />
					<p className="mt-20 lh-22">
						Автоматизированная информационная система «Реестры»
					</p>
					<p className="mt-20 lh-22">
						&copy; АИС «Реестры», 2022.
						<br />
						Все права защищены.
					</p>
				</div>
				<div>
					<h4>Техническая поддержка</h4>
					<p className="mt-20 lh-17">
						+375 25 111 22 33
					</p>
					<p className="mt-10 lh-17">
						+375 29 222 44 55
					</p>
					<p className="mt-10 lh-17">
						dev@agsr.by
					</p>
					<a className="mt-10 lh-17">
						Связаться с поддержкой
					</a>
				</div>
				<div>
					<h4>Контакты</h4>
					<p className="mt-20 lh-17">
						+375 33 112 22 45
					</p>
					<p className="mt-10 lh-17">
						+375 29 222 44 88
					</p>
					<p className="mt-10 lh-17">
						dev@agsr.by
					</p>
					<address className="mt-10 lh-17">
						г. Минск, ул. К.Цеткин, д. 24-705
					</address>
				</div>
			</section>
			<section>
				<img src={bank_logo} alt="Банк развития" />
				<button>Условный партнёр</button>
				<button>Условный партнёр</button>
				<button>Условный партнёр</button>
				<button>Условный партнёр</button>
			</section>
			<section className="copyright_info">
				<p className="lh-22">
					&copy; АИС «Реестры»
					<br />
					Разработчик: ОАО «Агентство сервисизации и реинжиниринга» (г. Минск, ул. К. Цеткин, д. 24–705 dev@agsr.by)
				</p>
			</section>
		</div>
	</footer>
);

export default Footer;