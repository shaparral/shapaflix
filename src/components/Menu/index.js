import React from 'react';
import ShapaFlixLogo from '../../Assets/Imagem/ShapaFlixLogo.png';
import './Menu.css';
import Button from '../../components/Menu/Button';

function Menu() {
    return(
        <nav className='Menu'>
            <a href='/'>
                <img className = 'Logo' src ={ShapaFlixLogo} alt='ShapaFlix'/>
            </a>
            <Button as='a' href='./' className='ButtonLink'>
                Clique Aqui

            </Button>
        </nav>

    )

}

export default Menu;