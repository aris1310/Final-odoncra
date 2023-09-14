import './App.css';
import Navbar from './Componentes/Navbar/Navbar';
import Footer from './Componentes/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Rutas/Home/Home';
import Contact from './Rutas/Contact/Contact';
import Fav from './Rutas/Fav/Fav';
import Detail from './Rutas/Detail/Detail';

function App() {
  return (
  <>
  <header>
    
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path='/favs' element={<Fav/>} />
      <Route path='/detail/:id' element={<Detail/>} />
    </Routes>
  </header>
  
  <main>

  </main>

  <footer>
  <Footer/>
  </footer>
  </>
  );
}

export default App;
