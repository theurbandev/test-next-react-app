import type { NextPage } from 'next'
import styles from '../styles/nav.module.css'
import Button from './buttons'

interface NavProps{
    name : string
};

function HandleBttnClick(event : string){
    alert({event} + " has happended");
}

const navItemList = ["Add Task", "Delete Task", "Undo"];
const navBttnList : Array<any> = [];
navItemList.forEach((item, index) => {
    navBttnList.push(<Button text={navItemList[index]} fontSize={"20px"} backgroundColor={"black"} textColor={"white"} padding={"10px"}></Button>)
});

const SideNav = (props: NavProps) => {
    return (
        <div className={styles.container} id={styles.sideNav}>
            <h2>{props.name}</h2>
            {navBttnList}
        </div>
    )
};

export default SideNav