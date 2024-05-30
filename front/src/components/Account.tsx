import { useState, useEffect, FC } from 'react';
import book from "../images/book.svg";
import server from "../images/server.svg";
import bookmark from "../images/bookmark.svg";
import arrow_right from "../images/arrow_right.svg";
import eye from "../images/eye.svg";
import exclamation_mark from "../images/exclamation_mark.svg";
import plus from "../images/plus.svg";
import grid from "../images/grid.svg";
import line from "../images/line.svg";
import Navigation from './Navigation';
import axios from "axios";
import Pagination from './Pagination';
import { DataEl } from '../types';

const Account: FC = () => {
	const [data, setData] = useState<DataEl[] | null>(null);

	useEffect(() => {
		axios.get("/api/data").then(res => setData(res.data));
	}, []);

	const arrowRight = <img src={arrow_right} alt="Стрелка вправо" />
	const navButtonsTitles = [
		'Реестры',
		'Электронные сервисы',
		'Потребление данных',
		'Справочники',
		'Отчёты',
	];

	const renderSectionButton = (src: string, textData: number) => (
		<button>
			<div>
				<img src={src} alt="Сервер" />
				<span className={textData ? "button_span" : "button_span--dark"}>{textData}</span>
				{arrowRight}
			</div>
		</button>
	);

	return (
		<div className="account">
			<section className="upper_registers">
				<div className="upper_registers__subcontainer">
					<Navigation data={["Главная", "Личный кабинет"]} />
					<h1 className="heading">Личный кабинет</h1>
					<nav>
						{navButtonsTitles.map(el => <button>{el}</button>)}
					</nav>
				</div>
			</section>
			<section className="registers">
				<div className="registers__subcontainer">
					<label>
						<p>Выбор ИС / СР для внесения метаданных</p>
						<input
							type="text"
							placeholder="Выберите ИС/СР для внесения метаданных..."
						/>
						<button>Показать</button>
					</label>
					<section className="registers__btns">
						<div>
							<button>
								<img src={eye} alt="Глаз" />
								Просмотр ИС/ИР
							</button>
							<button>
								<img src={exclamation_mark} alt="Восклицание" />
								Доп сведения ИС/ИР
							</button>
							<button className="add">
								<img src={plus} alt="Плюс" />
								Добавить
							</button>
						</div>
						<div className="view">
							<button>
								<img src={grid} alt="Сетка" />
							</button>
							<button>
								<img src={line} alt="Ряды" />
							</button>
						</div>
					</section>
					<div className="table_heading">
						<span>Список АИС</span>
						<div>
							<span>Показывать по:</span>
							<button>25</button>
							<button>50</button>
							<button>100</button>
						</div>
					</div>
					<table>
						<tbody>
							{data ?
								data.map(({
									ais_name, metadata, electronic_services, catalogs
								}) => (
									<tr>
										<span className="ais_name">{ais_name}</span>
										<section>
											{renderSectionButton(server, electronic_services)}
											{renderSectionButton(book, metadata)}
											{renderSectionButton(bookmark, catalogs)}
										</section>
									</tr>
								)) :
								<p>Пожалуйста, подождите...</p>}
						</tbody>
					</table>
					<Pagination />
				</div>
			</section>
		</div >
	);
};

export default Account;