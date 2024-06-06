import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
const Tarea = (props) => {
    const [editarTarea, setEditarTarea] = useState(false);
    return (
        
        <li className='lista-tareas__tarea' key={props.id}>
            <FontAwesomeIcon icon={faCheckSquare} 
                className='lista-tareas__icono lista-tareas__icono-check'
            />
            <div className='lista-tareas__texto'>
                {
                    editarTarea ? 
                    <form action='' className='formulario-editar-tarea'>
                        <input
                            className='formulario-editar-tarea__input'
                            type='text'/>
                        <button type='submit' 
                            className='formulario-editar-tarea__btn'></button>
                    </form>
                    :props.tarea
                }
            </div>
            <div className='lista-tareas__contenedor_botones'>
                <FontAwesomeIcon icon={faEdit} className='lista-tareas__icono lista-tareas__icono-accion'/>
                <FontAwesomeIcon icon={faTimes} className='lista-tareas__icono lista-tareas__icono-accion' />
            </div>

        </li>
       
    )
}


export default Tarea;