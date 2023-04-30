import './App.css';
import NavBar from './components/NavBar/NavBar';
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart';
import { Route , Routes } from 'react-router-dom';
import User from './components/User/User';
import Hombres from './components/Categorias/Hombres';
import Mujeres from './components/Categorias/Mujeres';
import Joyas from './components/Categorias/Joyas';
import Electronica from './components/Categorias/Electronica';
import Footer from './components/Footer/Footer';
import Carrusel from './components/Carrusel/Carrusel'
import Detail from './components/Detail/Detail';

function App() {
  return (

    <div>
      <NavBar/>
      <Carrusel/>
    <Routes>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/hombres' element={<Hombres/>}/>
      <Route path='/mujeres' element={<Mujeres/>}/>
      <Route path='/joyas' element={<Joyas/>}/>
      <Route path='/electronica' element={<Electronica/>}/>
      <Route path='/user' element={<User/>}/>
      <Route path='/' element={<Products />}/>
      <Route path='/detail/:id' element={<Detail/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
