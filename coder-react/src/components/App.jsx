import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './ItemListContainer/ItemListContainer';
const App = () => {
  
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/product/:id' element={<ItemDetailContainer/>}/>
        <Route path='/category/:category' element={<ItemListContainer/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
