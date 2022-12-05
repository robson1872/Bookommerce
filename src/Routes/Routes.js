import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from '../Pages/Home/Home'
import Dashboard from '../Pages/Dashboard/Dashboard'

function routes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>}/> {/*mudança na forma de usar rotas*/}
            <Route exact path="/Dashboard" element={<Dashboard/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default routes