
import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'

function Card() {
const [userData, setUserData] = useContext(UserContext)
  return (
    <div className='card'>
                <h2>O alquimista</h2>
                <h1>R$ 15,00</h1>
                <div className='card-info'>
                    <div className='card-info-detail'>
                        <img src = "" alt = ""/>
                        <p>João Pedro</p>
                    </div>
                    <div className='card-info-detail'>
                        <img src = "" alt = ""/>
                        <p>+55 82 9999 9999</p>
                    </div>
                </div>
            </div>
  )
}

export default Card