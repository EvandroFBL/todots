import styles from "./App.module.css";
import { Header } from "./components/Header";
import { TaskAdder } from "./components/TaskAdder";
import "./global.css";

export function App() {

	return (
		<>
			<Header />

			<div className={styles.taskAdder}>
				<TaskAdder />
			</div>
		</>
	)
}
