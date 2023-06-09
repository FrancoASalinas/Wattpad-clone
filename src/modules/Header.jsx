import { useState } from 'react'

export default function Header(){

    const  [openDialog, setOpenDialog] = useState(false)

    function handleClick(){
        setOpenDialog(prevState => !prevState)
    }

    return(
        <>
        <header className='header' >
            <img className='logo' src='https://www.wattpad.com/img//logos/wp-logo-orange.png' />
            <Dialog onClick={handleClick} label={'Explorar'} open={openDialog} />
            <Dialog onClick={handleClick} label={'Comunidad'} open={openDialog} />
            <div className='header__searchbar' >
                <button className='header__button' >
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
                <input className='header__searchbar__input' />
            </div>
            <button className='header__button' >Iniciar Sesión</button>
            <a className='header__dialog' href='#' >Español<span>&#9660;</span></a>
        </header>
        </>
    )
}

function Dialog({onClick, label, open}){
    return(
        <div className='header__dropdown-container'>
                <a className='header__dialog' href='#' onClick={onClick} >{label}<span>&#9660;</span></a>
                <dialog className='header__dropdown' open={open} ></dialog>
        </div>
    )
}