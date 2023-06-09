import { useState } from 'react'
import Header from './modules/Header'
import Main from './modules/Main'
import Footer from './modules/Footer'
import './main.scss'

function App() {

  const [openLogin, setOpenLogin] = useState(false);

  return (
    <>
      <Header className={'header'}
       onClick={() => setOpenLogin(prevState => !prevState)}
        openLogin={openLogin}
         onCloseLogin={() => setOpenLogin(false)} />
      <Main />
      <Footer />
      <LoginBlackenedTheme isOpen={openLogin} />
    </>
  )
    function LoginBlackenedTheme({isOpen}){
      return(
        isOpen ? <div className='blackened-theme' ></div> : null
      )
    }
}

export default App
