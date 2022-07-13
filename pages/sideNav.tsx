import type { NextPage } from 'next'
import styles from '../styles/nav.module.css'


const SideNav : NextPage = () => {
    return (
        <div className={styles.container} id={styles.sideNav}>
            <h1 className={styles.menuButtons} onClick={(e) => clicked("Add")}>Add Task</h1>
            <h1 className={styles.menuButtons} onClick={(e) => clicked("Remove")}>Delete Task</h1>
            <h1 className={styles.menuButtons} onClick={(e) => clicked("Undo")}>Undo</h1>
        </div>
    )
}

function clicked(title : string){
    alert(title);
}

export default SideNav