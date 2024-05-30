import { User } from "../types";

export const getPersonalDataInputs = (inputs: User) => [
	{
		field: "name",
		labelData: "Имя",
		placeholder: "Введите имя",
		value: inputs.name,
	},
	{
		field: "surname",
		labelData: "Фамилия",
		placeholder: "Введите фамилию",
		value: inputs.surname,
	},
	{
		field: "middle_name",
		labelData: "Отчество",
		placeholder: "Введите отчество",
		value: inputs.middle_name,
	},
	{
		field: "id",
		labelData: "Идентификационный номер",
		placeholder: "Введите идентификационный номер",
		value: inputs.id,
	},

	{
		field: "login",
		labelData: "Логин",
		placeholder: "Введите логин",
		value: inputs.login,
	},
];

export const getContactsInputs = (inputs: User) => [
	{
		field: "email",
		labelData: "Адрес электронной почты",
		placeholder: "agsr@mail.ru",
		value: inputs.email,
		type: "email",
		isRequired: false,
	},
	{
		field: "tel",
		labelData: "Мобильный номер",
		placeholder: "+375 29 123 44 55",
		value: inputs.tel,
		type: "tel",
		isRequired: false,
	}
];