import logo from "../images/logo.svg";
import bell from "../images/bell.svg";
import notification from "../images/notification.svg";
import userImage from "../images/user.svg";
import { useNavigate } from "react-router-dom";
import arrow_down from "../images/arrow_down.svg";
import { FC } from "react";
import { User } from "../types";

const Header: FC<{ user: User, text: string }> = ({ user, text }) => {
	const navigate = useNavigate();

	return (
		<header>
			<div className="header__subcontainer">
				<img src={logo} alt="Реестры" />
				<nav>
					<a href="#">Меню</a>
					<a href="#">Вопросы и ответы</a>
					<a href="#">Об АИС</a>
				</nav>
				<section>
					<button>
						<img src={user ? notification : bell} alt="Уведомления" />
					</button>
					<div className="separator"></div>
					<button onClick={() => navigate("/profile-form")}>
						<img src={userImage} alt="Пользователь" />
					</button>
					<span>{text}</span>
					<img src={arrow_down} alt="Вниз"></img>
				</section>
			</div>
		</header>
	);
};

export default Header;