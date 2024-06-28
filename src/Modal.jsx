import css from "./Modal.module.css";
import { useState } from "react";
const Modal = () => {
	const [show, setShow] = useState(false);
	console.log(show);
	const click = () => {
		setShow((мурункуЗначение) => !мурункуЗначение);
	};
	return (
		<div>
			<button onClick={click}>Modal</button>
			<div className={css.flex}>
				{show && (
					<div className={css.modalkaa}>
						<h1>Its me Modal!</h1>
					</div>
				)}
			</div>
		</div>
	);
};

export default Modal;
