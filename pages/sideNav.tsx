import type { NextPage } from 'next'
import styles from '../styles/nav.module.css'

// internal imports
import Button from './buttons'

interface Props{
    name : string,
    age? : number
};

function HandleBttnClick(event : string){
    alert({event} + " has happended");
}

const bttnArr = [
    "Add Task", "Delete Task", "Undo"
]
function CreateButtons(){
    for (let index = 0; index < bttnArr.length; index++) {
        const element = <button name={bttnArr[0]}></button>;
        return element;
    }
}

const SideNav = (props: Props) => {
    return (
        <div className={styles.container} id={styles.sideNav}>
            <h2>{props.name}</h2>
            {CreateButtons()}
            {/* <h1 className={styles.menuButtons}>Add Task</h1>
            <h1 className={styles.menuButtons}>Delete Task</h1>
            <h1 className={styles.menuButtons}>Undo</h1> */}
        </div>
    )
};

export default SideNav