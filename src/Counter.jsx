import { useState } from "react";
import styles from "./Counter.module.css";
const Counter = () => {
	const [count, setCount] = useState(0);
	return (
		<div>
				<button className={styles.counter} onClick={() => setCount(count + 2)}>+ 2</button>
				<button className={styles.counter} onClick={() => setCount(count + 4)}>+ 4</button>
				<button className={styles.counter} onClick={() => setCount(count + 6)}>+ 6</button>
				<button className={styles.counter} onClick={() => setCount(count * 3)}>* 3</button>
				<h1 className={styles.text}>{count}</h1>
		</div>
	);
};
export default Counter;
