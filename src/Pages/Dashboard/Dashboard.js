import React from 'react'
import Nav from '../../Components/Nav/Nav'
import DeletableCard from '../../Components/DeletableCard/DeletableCard'

function Dashboard() {
  return (
    <>
    <Nav />
    <section className= "input-section">
        <form>
            <h1>Cadastrar livro</h1>
            <div className='product-inputs'>
                <input type = "text" placeholder="Nome do livro"/>
                <input type = "number" min = "0" placeholder="Preço do Livro"/>
                <button>Cadastrar Livro</button>
            </div>
        </form>
    </section>
    <section className= "products-section">
        <div className='products-container'>
            <DeletableCard />
            <DeletableCard />
            <DeletableCard />
            <DeletableCard />
        </div>
    </section>
    </>
  )
}

export default Dashboard