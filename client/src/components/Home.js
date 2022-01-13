import React from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

const Home = () => {

    const {token} = useSelector(state => state.logState)

    // const navigate = useNavigate()
    if(token.length == 0) {
     return <Navigate to={"/github/register"} />
    }

    return (
        <div>
            DashBoard Page
        </div>
    )
}

export default Home
