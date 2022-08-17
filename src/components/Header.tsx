import styles from './Header.module.css';

export function Header() {

    return (
        <div className={styles.header}>
            <img src="src/assets/todo.svg" alt="logo" />
        </div>
    );
}