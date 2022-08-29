import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Task } from "./components/Task";
import { TaskAdder } from "./components/TaskAdder";
import "./global.css";

export function App() {

	return (
		<>
			<Header />

			<div className={styles.taskAdder}>
				<TaskAdder />
			</div>

			<div className={styles.tasks}>
				<div className={styles.taskCounters}>
					<div className={styles.createdTasks}>
						<span className={styles.createdTasksName}>Created Tasks</span>
						<span className={styles.createdTasksCounter}>5</span>
					</div>
					<div className={styles.completedTasks}>
						<span className={styles.completedTasksName}>Completed</span>
						<span className={styles.completedTasksCounter}>2 of 5</span>
					</div>
				</div>

				<div className={styles.taskList}>
					<Task />
					<Task />
					<Task />
				</div>
			</div>
		</>
	)
}
