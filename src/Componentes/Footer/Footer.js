import dhLogo from "../../Imagenes/DH.png"
import styles from "./Footer.module.css"
import facebook from "../../Imagenes/ico-facebook.png"
import insta from "../../Imagenes/ico-instagram.png"
import tikto from "../../Imagenes/ico-tiktok.png"
import what from "../../Imagenes/ico-whatsapp.png"



const Footer = () => {
  return (<div className={styles.divFooter}>


    <div className={styles.divOdo}>Odontologo Incorporation System</div>
    <div className={styles.divRedes}>

    <img src={dhLogo} alt='' className={styles.dhLogo}/>
    <div>

    <a href="https://www.facebook.com/"><img src={facebook} className={styles.redes}/></a>
    <a href="https://www.facebook.com/"><img src={insta} className={styles.redes}/></a>
    <a href="https://www.facebook.com/"><img src={tikto} className={styles.redes}/></a>
    <a href="https://www.facebook.com/"><img src={what} className={styles.redes}/></a>
    </div>
    
    </div>

  </div>
  
)
}

export default Footer