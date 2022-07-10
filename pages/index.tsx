import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

interface TemplateName {
  name : string,
  age  : number, 
  calcFavColor : Function,
}

function formatUser(user : TemplateName){
  return user.name + ' is ' + user.age + user.calcFavColor()
}

const UserOne : TemplateName = {
  name : "Matt",
  age  : 25,
  calcFavColor : ()=>{
    return "Green"
  }
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>{formatUser(UserOne)}</h1>
    </div>
  )
}

export default Home
