import React from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import Navbar from './Navbar'
import Public from './Public'

const Home = () => {

    const {token} = useSelector(state => state.logState)

    // const navigate = useNavigate()
    const dispatch = useDispatch()
    
    if(token.length == 0 || token[0] === null) {
     return <Navigate to={"/github/register"} />
    }


    

    return (
        
        <div>
            <Public/>
        </div>
    )
}

export default Home
