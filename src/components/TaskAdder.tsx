import { PlusCircle } from 'phosphor-react';
import styles from './TaskAdder.module.css';

export function TaskAdder(){

    return (
        <div className={styles.taskAdder}>
            <form className={styles.taskForm}>
                <input type='text' placeholder='Add a new task' className={styles.taskName}/>
                <button type='button' className={styles.taskAdd}>
                    Criar
                    <PlusCircle size={22} />
                </button>
            </form>
        </div>
    );
}