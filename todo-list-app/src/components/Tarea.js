import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faEdit, faTimes, faSquare} from '@fortawesome/free-solid-svg-icons';


const Tarea = ({tarea , completarTarea , modificarTarea, eliminarTarea , ocultarTareasCompletadas}) => {
    const [editarTarea, setEditarTarea] = useState(false);
    const [nuevaTarea, setNuevaTarea] = useState(tarea.tarea);


    //actualzar
    const actualizarTarea = (e) =>{
        e.preventDefault()
        setEditarTarea(!editarTarea);
        modificarTarea(tarea.id,nuevaTarea)
    }



    return (
        
        <li className='lista-tareas__tarea' key={tarea.id} style={{display: tarea.completada && ocultarTareasCompletadas ? 'none' : 'grid'}}>
            <FontAwesomeIcon icon={tarea.completada ? faCheckSquare : faSquare} 
                className='lista-tareas__icono lista-tareas__icono-check'
                onClick={()=>completarTarea(tarea.id)}
            />
            <div className='lista-tareas__texto'>
                {
                    editarTarea ? 
                    <form onSubmit={(e)=>actualizarTarea(e)} action='' className='formulario-editar-tarea'>
                        <input
                            className='formulario-editar-tarea__input'
                            type='text'
                            value={nuevaTarea}
                            onChange={(e)=>setNuevaTarea(e.target.value)}
                            />
                        <button type='submit' onClick={actualizarTarea}
                            className='formulario-editar-tarea__btn'>Actualizar</button>
                    </form>
                    :tarea.tarea
                }
            </div>
            <div className='lista-tareas__contenedor_botones'>
                <FontAwesomeIcon icon={faEdit} className='lista-tareas__icono lista-tareas__icono-accion'
                onClick={()=>setEditarTarea(!editarTarea)}
                />
                <FontAwesomeIcon icon={faTimes} className='lista-tareas__icono lista-tareas__icono-accion' onClick={()=>eliminarTarea(tarea.id)} />
            </div>

        </li>
       
    )
}


export default Tarea;