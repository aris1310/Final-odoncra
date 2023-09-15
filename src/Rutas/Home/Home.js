import React from 'react'
import { useCharStates } from '../../GContext/Context'
import Card from '../../Componentes/Card/Card'
import styles from "./Home.module.css"

const Home = () => {
  const {char} = useCharStates()
  return (
    <>
    <div className={styles.div}>
    {char.map(char=> <Card char={char} key={char.id}/>)}
    </div>
    </>
  )
}

export default Home