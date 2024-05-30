import { FC, FormEvent, useEffect, useState } from 'react';
import photo from "../images/photo.svg";
import Navigation from './Navigation';
import axios from "axios";
import { InputData, User } from '../types';
import { getPersonalDataInputs, getContactsInputs } from './helpers';

const ProfileForm: FC<{ user: User }> = ({ user }) => {
	const [change, setChange] = useState(false);

	const basicInputs: User = {
		name: "",
		surname: "",
		middle_name: "",
		id: "",
		login: "",
		email: "",
		tel: "",
		password: "",
	};

	const { name, surname, middle_name, id, login, email, tel } = user;

	useEffect(() => {
		setInputs({
			name, surname, middle_name, id, login, email, tel, password: ""
		});
	}, [])

	const [currentPassword, setCurrentPassword] = useState("");
	const [enteredPassword, setEnteredPassword] = useState("");
	const [confirmedPassword, setConfirmedPassword] = useState("");

	const [inputs, setInputs] = useState(basicInputs);

	useEffect(() => {
		change && axios.put("/api/change", {
			login, password: confirmedPassword
		}).then(() => {
			alert("Готово.");
			setInputs(basicInputs);
			setCurrentPassword("");
			setEnteredPassword("");
			setConfirmedPassword("");
		})
	}, [change]);

	const renderProfileFormInput = ({
		field,
		labelData,
		placeholder,
		value = "",
		type = "text",
		isRequired = true
	}: InputData) => (
		<label key={field}>
			<p>{labelData}{isRequired ? "*" : ""}</p>
			<input
				type={type}
				required={isRequired}
				placeholder={placeholder || `Введите ${labelData.toLowerCase()}`}
				value={value}
				onChange={field ? e => setInputs(prev => ({ ...prev, [field]: e.target.value })) : () => { }}
			/>
		</label>
	);
	const onSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (currentPassword) {
			axios.post("/api/users", { login, password: currentPassword }).then(res => !res.data.login ? alert("Текущий пароль неверен.") : setChange(true))
		} else {
			alert("Введите старый пароль.")
		}
	};

	const disabledCondition = !(
		enteredPassword === confirmedPassword
		&& enteredPassword !== ""
		&& confirmedPassword !== ""
	);


	return (
		<div className="profile_form">
			<div className="profile_form__subcontainer">
				<Navigation data={["Главная", "Профиль"]} />
				<h1 className="heading">Профиль</h1>
				<div className="profile_form__subheading">
					<img src={photo} alt="Фото" />
					<span>{name} {surname}</span>
					<button>Активный</button>
					<button>Пользователь</button>
				</div>
				<form onSubmit={onSubmit}>
					<hr />
					<section>
						<h5>Личные данные</h5>
						<a href="#" className="edit">Редактировать</a>
						<div>
							{
								getPersonalDataInputs(inputs)
									.map(el => renderProfileFormInput(el))
							}
						</div>
					</section>
					<hr />
					<section>
						<h5>Контакты</h5>
						<a className="edit">Редактировать</a>
						<div>
							{
								getContactsInputs(inputs)
									.map(el => renderProfileFormInput(el))
							}
						</div>
					</section>
					<hr />
					<section>
						<h5>Пароль</h5>
						<div>
							<label>
								<p>Текущий пароль</p>
								<input
									type="password"
									placeholder="Введите текущий пароль"
									value={currentPassword}
									onChange={({ target }) =>
										setCurrentPassword(target.value)}
								/>
							</label>
							<br />
							<label>
								<p>Новый пароль</p>
								<input
									type="password"
									placeholder="Введите новый пароль"
									value={enteredPassword}
									onChange={({ target }) =>
										setEnteredPassword(target.value)}
								/>
							</label>
							<label>
								<p>Подтвердите пароль</p>
								<input
									type="password"
									placeholder="Подтвердите пароль"
									value={confirmedPassword}
									onChange={({ target }) => {
										setConfirmedPassword(target.value);
									}}
								/>
							</label>
						</div>
					</section>
					<hr />
					<button
						className={`main_btn ${disabledCondition ? "disabled" : ""}`}
						type="submit"
						disabled={disabledCondition}
					>
						Сохранить
					</button>
				</form>
			</div>
		</div>
	);
};

export default ProfileForm;