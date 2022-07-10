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

let numbers = [1, 9]
const addNums = <h1> Your toal is: {numbers[0] + numbers[1]} </h1>



// return variable 
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      {addNums}
    </div>
  )
}
export default Home
