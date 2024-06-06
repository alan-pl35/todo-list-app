import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash} from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
        <header className='header'>
            <h1 className='header__titulo'> To do list</h1>
            <button className='header__boton'>
                Show nothing please
                <FontAwesomeIcon icon={faEyeSlash}
                    className='header__icono-boton'
                />
            </button>
        </header>
    ) 
}

export default Header;


