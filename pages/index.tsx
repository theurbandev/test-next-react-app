import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SideNav from './sideNav'

const Home: NextPage = () => {
  return (
    <>
    <h1 className={styles.center}>To-Do</h1>
      <SideNav/>
    <div className={styles.container}>
      <h1>Hello, world.</h1>
    </div>
    </>
  )
}

export default Home
