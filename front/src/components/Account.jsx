import React, { useState, useEffect } from 'react';
import book from "../images/book.svg";
import server from "../images/server.svg";
import bookmark from "../images/bookmark.svg";
import arrow_right from "../images/arrow_right.svg";
import eye from "../images/eye.svg";
import exclamation_mark from "../images/exclamation_mark.svg";
import plus from "../images/plus.svg";
import grid from "../images/grid.svg";
import line from "../images/line.svg";
import ReactPaginate from "react-paginate";
import Navigation from './Navigation';
import axios from "axios";
import arrow_once_left from "../images/arrow_once_left.svg";
import arrow_once_right from "../images/arrow_once_right.svg";
import arrow_double_left from "../images/arrow_double_left.svg";
import arrow_double_right from "../images/arrow_double_right.svg";

const Account = () => {
	const [data, setData] = useState(null);
	useEffect(() => {
		axios.get("/api/data").then(res => setData(res.data));
	}, []);

	const arrowRight = <img src={arrow_right} alt="Стрелка вправо" />

	return (
		<div className="account">
			<section className="upper_registers">
				<div className="upper_registers__subcontainer">
					<Navigation data={["Главная", "Личный кабинет"]} />
					<h1 className="heading">Личный кабинет</h1>
					<nav>
						<button>Реестры</button>
						<button>Электронные сервисы</button>
						<button>Потребление данных</button>
						<button>Справочники</button>
						<button>Отчёты</button>
					</nav>
				</div>
			</section>
			<section className="registers">
				<div className="registers__subcontainer">
					<label>
						<p>Выбор ИС / СР для внесения метаданных</p>
						<input type="text" placeholder="Выберите ИС/СР для внесения метаданных..." />
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
					<div className="table__heading">
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
								data.map(({ ais_name, metadata, electronic_services, catalogs }) => (
									<tr>
										<span className="ais_name">{ais_name}</span>
										<section>
											<button>
												<div>
													<img src={book} alt="Книга" />
													<span style={metadata ? null : { color: "#000" }}>{metadata}</span>
													{arrowRight}
												</div>
											</button>
											<button>
												<div>
													<img src={server} alt="Сервер" />
													<span style={electronic_services ? null : { color: "#000" }}>{electronic_services}</span>
													{arrowRight}
												</div>
											</button>
											<button>
												<div>
													<img src={bookmark} alt="Закладка" />
													<span style={catalogs ? null : { color: "#000" }}>{catalogs}</span>
													{arrowRight}
												</div>
											</button>
										</section>
									</tr>
								)) :
								<p>Пожалуйста, подождите...</p>}
						</tbody>
					</table>
					<div className="pagination_container">
						<section className="pagination_subcontainer">
							<a className="beginning">
								<img src={arrow_double_left} />
							</a>
							<ReactPaginate
								previousLabel={<img src={arrow_once_left} />}
								nextLabel={<img src={arrow_once_right} />}
								pageCount={11}
								onPageChange={() => { }}
								containerClassName={"pagination"}
								previousLinkClassName={"pagination__link"}
								nextLinkClassName={"pagination__link"}
								disabledClassName={"pagination__link--disabled"}
								activeClassName={"pagination__link--active"}
								forcePage={0}
							/>
							<a className="end">
								<img src={arrow_double_right} />
							</a>
						</section>
					</div>
				</div>
			</section>
		</div >
	);
};

export default Account;