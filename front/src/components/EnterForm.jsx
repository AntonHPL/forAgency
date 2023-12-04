import { useState } from 'react';
import Navigation from './Navigation';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EnterForm = ({ setUser }) => {
	const [login, setLogin] = useState(null);
	const [password, setPassword] = useState(null);

	const navigate = useNavigate();

	const onSubmit = e => {
		e.preventDefault();
		if (login && password) {
			axios
				.post("/api/users", { login, password })
				.then(res => res.data ? (setUser(res.data), navigate("/account")) : alert("Неверные данные."))
				.catch(err => console.log(err));
		} else {
			alert("Введите данные.");
		};
	};

	return (
		<div className="enter_form">
			<div className="enter_form__subcontainer">
				<Navigation data={["Вернуться на главную"]} />
				<section>
					<form onSubmit={onSubmit}>
						<h1 className="heading">Вход</h1>
						<label>
							<p>Логин</p>
							<input type="text" placeholder="Введите логин" onChange={e => setLogin(e.target.value)} />
						</label>
						<label>
							<p>Пароль</p>
							<input type="password" placeholder="Введите пароль" onChange={e => setPassword(e.target.value)} />
						</label>
						<button className="main_btn" type="submit">Вход</button>
						<br />
						<button className="main_btn">Авторизация с использованием ЕС ИФЮЛ</button>
					</form>
				</section>
			</div>
		</div>
	);
};

export default EnterForm;