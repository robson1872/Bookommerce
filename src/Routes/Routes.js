import React, { useContext } from 'react'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'

import { UserContext } from '../Context/UserContext' 

import Home from '../Pages/Home/Home'
import Dashboard from '../Pages/Dashboard/Dashboard'

function Routess() {
    const [userData] = useContext(UserContext)    

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>    
                <Route path="/dashboard" element={!userData.isLogged ? <Navigate to="/" replace /> :  <Dashboard />} />                                   
            </Routes>
        </BrowserRouter>
    )
}

export default Routess