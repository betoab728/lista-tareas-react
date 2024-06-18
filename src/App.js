import './App.css';
import freecodecamplogo from './imagenes/freecodecamp-logo-tr.png'
import ListaTareas from './componentes/ListaTareas';

function App() {
  return (
    <div className="App-tareas">
     <div className='freecodecamp-logo-contenedor'>
        <img src={freecodecamplogo} className='freecodecamp-logo' />
     </div>
     <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaTareas />
     </div>
    </div>
  );
}

export default App;
