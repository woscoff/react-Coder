import './App.css';
import Navbar from './Navbar/Navbar';
import Form from './Form/Form';
const App = () => {
  return (
    <>
      <Navbar/>
      <Form busqueda={"Buscar productos"}/>
    </>
  );
}

export default App;
