
import './App.css';
import React , {useState , useEffect} from 'react'
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaTareas from './components/ListaTareas'
const App = ()=> {
  const [tareas, setTareas] = useState([]);
  const [ocultarTareasCompletadas, setOcultarTareasCompletadas] = useState(false);

  useEffect(()=>{
    console.log(tareas)
  } , [tareas])

  
  return (
    <div className='contenedor'>

      <Header ocultarTareasCompletadas={ocultarTareasCompletadas} setOcultarTareasCompletadas={setOcultarTareasCompletadas} ></Header>
      
      <Formulario tareas={tareas} setTareas={setTareas}></Formulario>
      <ListaTareas ocultarTareasCompletadas={ocultarTareasCompletadas} tareas={tareas} setTareas={setTareas}/>    
    </div>
    
  );
}

export default App;