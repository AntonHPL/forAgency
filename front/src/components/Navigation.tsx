import { FC } from "react";
import arrow_left_1 from "../images/arrow_left_1.svg";
import arrow_left_2 from "../images/arrow_left_2.svg";

const Navigation: FC<{ data: string[] }> = ({ data }) => {
	return (
		<div className="navigation">
			{data.map((el, i) => (
				<div className={i === 0 ? "active" : "inactive"} >
					<img src={i === 0 ? arrow_left_1 : arrow_left_2} alt="Назад" />
					<a href="#">{el}</a>
				</div>
			))}
		</div>
	);
};

export default Navigation;