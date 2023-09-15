import React from 'react'
import { useCharStates } from '../../GContext/Context'
import Card from '../../Componentes/Card/Card'

const Fav = () => {
  const {state}=useCharStates()
  return (
    <div>
        <h2>Favoritos</h2>
        {state.favs.map(fav => <Card char={fav} key={fav.id}/>)}
    </div>
  )
}

export default Fav