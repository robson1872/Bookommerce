import React from 'react'
import {Link} from 'react-router-dom'
function LoginModal({setRegisterForm}) {
  return (
    <div className='modal'>
            <h1>Entrar</h1>
            <form action = "">
                <input type ="text" placeholder="email"/>
                <input type ="text" placeholder="senha"/>
                <button>Entrar</button>
                <Link onClick={setRegisterForm}>Cadastrar conta</Link>
            </form>
        </div>
  )
}

export default LoginModal