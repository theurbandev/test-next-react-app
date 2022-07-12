import type { NextPage } from 'next'
import styles from '../styles/nav.module.css'

const Nav : NextPage = () => {
    return (
        <div>
            <h1 className = {styles.navTxt}>To-Do</h1>
        </div>
    )
}

export default Nav