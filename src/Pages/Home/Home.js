import React from 'react'
import Logo from '../../assets/logo.png'
function Home() {
  return (
    <>
    <nav>
        <div className='nav-container'>
            <img src = {Logo} alt = "Logo do Bookommerce" />
            <button>Entrar</button>
        </div>
    </nav>

    <section className= "input-section">
        <form>
            <h1>Pesquisar livros</h1>
            <div className='form-inputs'>
                <input type = "text" placeholder="Pesquisar por nome do livro"/>
                <input type = "number" min = "0" placeholder="Preço máximo"/>
            </div>
        </form>
    </section>
    
    <section className= "products-section">
        <div className='products-container'>
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
        </div>
    </section>

    </>
  )
}

export default Home