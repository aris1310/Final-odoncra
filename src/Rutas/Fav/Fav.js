import React from 'react'
import { useCharStates } from '../../GContext/Context'
import Card from '../../Componentes/Card/Card'
import styles from "./Fav.module.css"

const Fav = () => {
  const {state}=useCharStates()
  return (
    <div className={styles.div}>
        
        {state.favs.map(fav => <Card char={fav} key={fav.id}/>)}
    </div>
  )
}

export default Fav