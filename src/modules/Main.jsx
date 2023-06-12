
import Carousel from './Carousel/Carousel'

export default function Main(){
    return(
        <>
        <main className='main' >
            <MainLeft />
            <MainRight />
        </main>
        <Carousel />
        </>
    )
}

function MainLeft(){
    return(
        <div className="main__left">
                <h1 className="main__left__title">Hola, somos Wattpad</h1>
                <h2 className="main__left__subtitle">La plataforma del mundo social basada en narrativa más amada en el mundo</h2>
                <p className="main__left__text">Wattpad conecta una comunidad global de 85 millones de lectores y escritores a través del poder de las historias.</p>
                <div className="main__left__buttons">
                    <button className="main__left__button">Comienza a leer</button>
                    <button className="main__left__button">Comienza a escribir</button>
                </div>
        </div>
    )
}

function MainRight(){
    return(
        <div className='main__right' >
            <img src="https://www.wattpad.com/img/landing/hero-devices.png" alt="devices image" className="main__right__img" />
        </div>
    )
}