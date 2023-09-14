import React from 'react'
import style from "./Navbar.module.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const direcciones= [{route:"/", name:"Home"},
                      {route:"/contact", name:"Contact"},
                      {route:"/favs", name:"Favs"}]
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
        <button>Change theme</button>
    </div>
  )
}

export default Navbar