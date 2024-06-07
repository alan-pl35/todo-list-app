import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash ,faEye} from '@fortawesome/free-solid-svg-icons'
const Header = ({ocultarTareasCompletadas , setOcultarTareasCompletadas}) => {
    return (
        <header className='header'>
            <h1 className='header__titulo'> To do list</h1>
            <button className='header__boton' onClick={()=>setOcultarTareasCompletadas(!ocultarTareasCompletadas)}> 
                Show nothing please
                <FontAwesomeIcon icon={ocultarTareasCompletadas ? faEyeSlash : faEye }
                    className='header__icono-boton'
                />
            </button>
        </header>
    ) 
}

export default Header;


