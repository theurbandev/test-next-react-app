import type { NextPage } from 'next'
import styles from '../styles/nav.module.css'

const SideNav : NextPage = () => {
    return (
        <div className={styles.container} id={styles.sideNav}>
            <h1 className={styles.menuButtons}>Add Task</h1>
            <h1 className={styles.menuButtons}>Delete Task</h1>
            <h1 className={styles.menuButtons}>Undo</h1>
        </div>
    )
}

export default SideNav