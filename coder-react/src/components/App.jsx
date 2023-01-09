import './App.css';
import {useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import { DarkModeProvider } from '../context/DarkModeContext';

import Navbar from './Navbar/Navbar';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
import productos from '../assets/json/productos.json'
import {getFirestore, addDoc, collection, getDocs} from 'firebase/firestore'

const App = () => {

  useEffect(()=>{
    const db = getFirestore()
    const coleccionProductos=  collection(db, "productos")
    getDocs(coleccionProductos)
    .then((result)=> {
      const lista = result.docs.map((producto)=>{
        return{
          id:producto.id,
          ...producto.data()
        }
      })
      console.log(lista)
    })
    .catch((error)=> console.log(error))
   
  }, [])
  
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