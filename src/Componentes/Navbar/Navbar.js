import React from 'react'
import style from "./Navbar.module.css"
import { Link } from 'react-router-dom'
import { useCharStates } from '../../GContext/Context'

const Navbar = () => {
  const {dispatch} = useCharStates()
  const direcciones= [{route:"/", name:"Home"},
                      {route:"/contact", name:"Contact"},
                      {route:"/favs", name:"Favs"}]


  const changeTheme = () => {
    dispatch({type: 'SWITCH_THEME'})
  }
  return (
    <div className={style.div}>
        <h2>DH Odonto</h2>
        <nav className={style.nav}>
          {direcciones.map((direccion, index) => (
            <Link to={direccion.route} key={index} >
              {direccion.name}
            </Link>
          ))}
        </nav>
        <button onClick={changeTheme}>Change theme</button>
    </div>
  )
}

export default Navbar