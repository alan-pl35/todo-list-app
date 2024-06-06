
import './App.css';
import React , {useState , useEffect} from 'react'
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaTareas from './components/ListaTareas'
const App = ()=> {
  const [tareas, setTareas] = useState([]);

  useEffect(()=>{
    console.log(tareas)
  } , [tareas])

  
  return (
    <div className='contenedor'>

      <Header></Header>
      
      <Formulario tareas={tareas} setTareas={setTareas}></Formulario>
      <ListaTareas tareas={tareas}/>    
    </div>
    
  );
}

export default App;