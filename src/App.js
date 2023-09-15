import styles from "./App.module.css"
import Navbar from './Componentes/Navbar/Navbar';
import Footer from './Componentes/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Rutas/Home/Home';
import Contact from './Rutas/Contact/Contact';
import Fav from './Rutas/Fav/Fav';
import Detail from './Rutas/Detail/Detail';
import { useCharStates } from "./GContext/Context";

function App() {
  const {state}=useCharStates()

  const darkMode = () =>{
    if (state.theme) {
      return styles.dark
    }
  }
  return (
  
  <div className={darkMode()}>

    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path='/favs' element={<Fav/>} />
      <Route path='/detail/:id' element={<Detail/>} />
    </Routes>
  
  <Footer/>
  </div>
    

  
  );
}

export default App;
