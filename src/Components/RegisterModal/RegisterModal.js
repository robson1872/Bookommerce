import React from 'react'
import {Link} from 'react-router-dom'

function RegisterModal({setLoginForm}) {
  return (
    <div className='modal'>
            <h1>Cadastrar</h1>
            <form action = "">
                <input type ="text" placeholder="nome"/>
                <input type ="text" placeholder="número"/>
                <input type ="text" placeholder="email"/>
                <input type ="text" placeholder="senha"/>
                <button>Criar conta</button>
                <Link onClick={setLoginForm}>Fazer Login</Link>
            </form>
        </div>
  )
}

export default RegisterModal