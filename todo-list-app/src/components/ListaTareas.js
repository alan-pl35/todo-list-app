import React from 'react'
import Tarea from './Tarea'
const ListaTareas = ({tareas , setTareas, ocultarTareasCompletadas}) => {

    const completarTarea  = (id) =>{
    
        setTareas(tareas.map(tarea => {
            return tarea.id === id ? {...tarea , completada: !tarea.completada} : tarea
        }))
    
    }

    const editarTarea  = (id , textoTarea) =>{
    
        setTareas(tareas.map(tarea => {
            return tarea.id === id ? {...tarea , tarea: textoTarea} : tarea
        }))
    
        console.log('tarea id' , id)
    }
    
    const eliminarTarea = (id) => {
        setTareas(tareas.filter(tarea=>tarea.id !== id))
    }


    return (
        
            <ul className='lista-tareas'>
                {
                    // eslint-disable-next-line no-whitespace-before-property
                    tareas.length > 0 ? 
                    tareas.map(t =>{
                        return <Tarea ocultarTareasCompletadas={ocultarTareasCompletadas} key={t.id} modificarTarea={editarTarea}  tarea={t} completarTarea={completarTarea} eliminarTarea={eliminarTarea}/>  
                    })
                    : <div className='lista-tareas__mensaje'>No hay items</div>

                }
            </ul>
        
    )
}

export default ListaTareas;