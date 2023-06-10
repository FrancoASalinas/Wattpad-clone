import { useState } from 'react'
import { useRef } from 'react';

export default function Footer(){

    return (
        <footer className='footer' >
            <ul className='footer__links--black' >
                <li><a href='#'>Historias Pagadas</a></li>
                <li><a href='#'>Prueba Premium</a></li>
                <li><a href='#'>Obtener la Aplicación</a></li>
                <li><a href='#'>Idioma</a></li>
                <li><a href='#'>Escritores</a></li>
                <div></div>
                <li><a href='#'>Negocios</a></li>
                <li><a href='#'>Empleos</a></li>
                <li><a href='#'>Prensa</a></li>
            </ul> 
            <ul className='footer__links--grey' >
                <li><a href='#'>Condiciones</a></li>
                <li><a href='#'>Privacidad</a></li>
                <li><a href='#'>Accesibilidad</a></li>
                <li><a href='#'>Ayuda</a></li>
                <span>2023 Wattpad</span>
            </ul> 
        </footer>
    )
}




        


