import { useState } from 'react';
import { useEffect } from 'react';

export default function Header({ onClick, openLogin, onCloseLogin }) {
  const [openDialog, setOpenDialog] = useState(0);

  return (
    <header className="header">
      <Logo src={'https://www.wattpad.com/img//logos/wp-logo-orange.png'} />
      <Dialog
        label={'Explorar'}
        open={openDialog === 1}
        onClick={() => {
          openDialog === 1 ? setOpenDialog(0) : setOpenDialog(1);
        }}
      />
      <Dialog
        label={'Comunidad'}
        open={openDialog === 2}
        onClick={() => {
          openDialog === 2 ? setOpenDialog(0) : setOpenDialog(2);
        }}
      />
      <Searchbar />
      <Button label={'Iniciar Sesión'} onClick={onClick} />
      <Dialog
        style={{ left: '-14em', width: '20em' }}
        label={'Español'}
        open={openDialog === 3}
        onClick={() => {
          openDialog === 3 ? setOpenDialog(0) : setOpenDialog(3);
        }}
      />
      <Login open={openLogin} onClick={onCloseLogin} />
    </header>
  );
}

function Logo({ src }) {
  return <img className="logo" src={src} />;
}

function Searchbar() {
  return (
    <div className="header__searchbar">
      <button className="header__button">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      <input className="header__searchbar__input" placeholder="Buscar" />
    </div>
  );
}

function Button({ label, onClick }) {
  return (
    <button className="header__button" onClick={onClick}>
      {label}
    </button>
  );
}

function Dialog({ onClick, label, open, style }) {
  return (
    <div className="header__dropdown-container">
      <a className="header__dialog" href="#" onClick={onClick}>
        {label}
        <span>&#9660;</span>
      </a>
      <dialog style={style} className="header__dropdown" open={open}></dialog>
    </div>
  );
}

function Login({ open, onClick }) {
  if (open) {
    return (
      <div className="modal">
        <button className="modal__button-close" onClick={onClick}>
          X
        </button>
        <h2 className="modal__title">Inicia sesión en Wattpad</h2>
        <button className="modal__button facebook">
          <i className="fa-brands fa-facebook"></i>Iniciar Sesión con Facebook
        </button>
        <button className="modal__button google">
          <i className="fa-brands fa-google"></i>Iniciar Sesión con Google
        </button>
        <p className="modal__text">OR</p>
        <button className="modal__button">Iniciar sesión</button>
        <a className="modal__forgot-password" href="#">
          ¿Has olvidado tu contraseña?
        </a>
        <div className="modal__register">
          ¿Aún no tienes una cuenta?<a href="#"> Registrate</a>
        </div>
      </div>
    );
  } else return;
}
