import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import SideNav from './sideNav'

const Home: NextPage = () => {
  return (
    <>
    <h1 className={styles.center}>To-Do</h1>
    <div className={styles.gridContainer}>
        <div className='grid-item'>
          <SideNav name="Matthew J."/>
        </div>

      <div className="grid-item">
        <h1 className={styles.lightFont}>All Tasks Complete!</h1>
      </div>
      
    </div>
    </>
  )
};

export default Home;