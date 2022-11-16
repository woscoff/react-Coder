import './App.css';

function App() {
const user = {nombre: "Pedro", apellido: "Parker"}

  return (
    <div>
      <h1 className='titulo parrafo'>Curso de react!!!</h1>
      <p>{user.nombre}</p>
      <p>{user.apellido}</p>
      <input type="text" />
    </div>
  );
}

export default App;
