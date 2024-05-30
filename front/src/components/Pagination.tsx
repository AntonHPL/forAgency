import arrow_once_left from "../images/arrow_once_left.svg";
import arrow_once_right from "../images/arrow_once_right.svg";
import arrow_double_left from "../images/arrow_double_left.svg";
import arrow_double_right from "../images/arrow_double_right.svg";
import ReactPaginate from "react-paginate";
import { FC } from "react";

const Pagination: FC = () => (
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
				containerClassName="pagination"
				previousLinkClassName="pagination__link"
				nextLinkClassName="pagination__link"
				disabledClassName="pagination__link--disabled"
				activeClassName="pagination__link--active"
				forcePage={0}
			/>
			<a className="end">
				<img src={arrow_double_right} />
			</a>
		</section>
	</div>
)

export default Pagination;