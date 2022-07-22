import type { NextPage } from 'next'
import styles from '../styles/nav.module.css'

interface Props{
    name : string,
    age? : number
};

export const SideNav = (props: Props) => {
    return (
        <div className={styles.container} id={styles.sideNav}>
            <h2>{props.name}</h2>
            <h1 className={styles.menuButtons}>Add Task</h1>
            <h1 className={styles.menuButtons}>Delete Task</h1>
            <h1 className={styles.menuButtons}>Undo</h1>
        </div>
    )
};

function clicked(title : string){
    alert(title);
}

export default SideNav