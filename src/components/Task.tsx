import { Trash } from 'phosphor-react';
import styles from './Task.module.css'

export function Task() {
    
    return (
        <div className={styles.task}>
            <input type="checkbox" name="taskCheck" id="taskCheck" className={styles.taskCheck} />
            <span className={styles.taskDescription}>Let's just make it and leave.</span>
            <div className={styles.taskDelete}>
                <Trash size={16} />
            </div>
        </div>
    );
}