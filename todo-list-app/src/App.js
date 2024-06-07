
import './App.css';
import React , {useState , useEffect} from 'react'
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaTareas from './components/ListaTareas'
import { config } from '@fortawesome/fontawesome-svg-core';
const App = ()=> {

  const tareasLocalStorage = localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')) : [];

  const [tareas, setTareas] = useState(tareasLocalStorage);
  useEffect(()=>{
    localStorage.setItem('tareas' , JSON.stringify(tareas))
    console.log(tareas)
  } , [tareas])

  

  let configOcultarCompletadas =(localStorage.getItem('ocultarTareasFlag') === null);

  const [ocultarTareasCompletadas, setOcultarTareasCompletadas] = useState(configOcultarCompletadas);

  //useEffect para ocultar tareasCommpletadas
  useEffect(()=> {
    localStorage.setItem('ocultarTareasFlag' , ocultarTareasCompletadas.toString())
  } , [ocultarTareasCompletadas])  


  
  return (
    <div className='contenedor'>

      <Header ocultarTareasCompletadas={ocultarTareasCompletadas} setOcultarTareasCompletadas={setOcultarTareasCompletadas} ></Header>
      
      <Formulario tareas={tareas} setTareas={setTareas}></Formulario>
      <ListaTareas ocultarTareasCompletadas={ocultarTareasCompletadas} tareas={tareas} setTareas={setTareas}/>    
    </div>
    
  );
}

export default App;