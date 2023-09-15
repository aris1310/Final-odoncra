import React from 'react'
import doctor  from "../../Imagenes/doctor.jpg"
import botton from "../../Imagenes/favoritos.png"
import style from "./Card.module.css"
import { Link } from 'react-router-dom'
import { useCharStates } from '../../GContext/Context'

const Card = ({char}) => {
  const {dispatch} = useCharStates()
  const addFav = () => {
      dispatch({type: 'ADD_FAV', payload: char})
    }

  return (
    <div className={style.card}>
    <Link to={"/detail/" + char.id}>

    <img src={doctor} alt="" className={style.imgDoctor}/>
    <h3>{char.name}</h3>
    <h3>{char.username}</h3>
    <h3>{char.email}</h3>
    </Link>
    <button onClick={addFav}> <img src={botton} alt='icono' className={style.imgButton}/> </button>
    </div>
  )
}

export default Card