import React from 'react'
import Tarea from './Tarea'
const ListaTareas = ({tareas}) => {
    return (
        
            <ul className='lista-tareas'>
                {
                    // eslint-disable-next-line no-whitespace-before-property
                    tareas.length > 0 ? 
                    tareas.map(t =>{
                        return <Tarea id={t.id} tarea={t.tarea}/>  
                    })
                    : <div className='lista-tareas__mensaje'>No hay items</div>

                }
            </ul>
        
    )
}

export default ListaTareas;