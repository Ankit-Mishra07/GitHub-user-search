import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import Search from '../components/Search'

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/github/register" element={<Register />}></Route>
                <Route path="/github/login" element={<Login />}></Route>
                <Route path="/search/:username" element={<Search />}></Route>
            </Routes>
        </div>
    )
}

export default Routing
