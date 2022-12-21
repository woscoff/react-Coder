import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import { DarkModeProvider } from '../context/DarkModeContext';

import Navbar from './Navbar/Navbar';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
import { cargarBDD } from '../assets/firebase';
const App = () => {
  
  return (
    <>
      <BrowserRouter>
      <DarkModeProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/product/:id' element={<ItemDetailContainer/>}/>
        <Route path='/category/:category' element={<ItemListContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
      </DarkModeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
