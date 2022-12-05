import React, { useContext } from 'react'
import Logo from '../../assets/logo.png'
import { UserContext } from '../../Context/UserContext'

function Nav({openModal}) {
    const [userData, setUserData] = useContext(UserContext)
  return (
    <nav>
        <div className='nav-container'>
            <img src = {Logo} alt = "Logo do Bookommerce" />
            {userData.isLogged ? <button>Sair</button> : <button onClick={openModal}>Entrar</button>}
        </div>
    </nav>
    
  )
}

export default Nav