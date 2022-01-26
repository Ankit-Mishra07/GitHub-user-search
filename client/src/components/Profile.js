import React from 'react'
import { GetData, saveData } from '../utils/localstorage'
import '../styles/profile.css'
import { darkblack, white } from '../colors/colors'
import { useDispatch, useSelector } from 'react-redux'
import { loginSuccess } from '../Redux/Login/action'
import { useNavigate } from 'react-router-dom'
const Profile = () => {
    const getLocal = GetData("gituser")
    const getProfile = getLocal[0]
    // console.log(getProfile)
    const navigate = useNavigate()
   const dispatch = useDispatch()
//    const {token} = useSelector(state => state.logState)
    return (
        <div className='profile_cont' >
            <div className='profile_box'>
                <h3 style={{color : white}}>{getProfile.name}</h3>
                <div style={{color : white}} >
                    <p>Username : {getProfile.username}</p>
                    <p>Email : {getProfile.email}</p>
                    <p>Mobile : {getProfile.mobile}</p>
                    <p>Description : {getProfile.description}</p>
                </div>
                <a href="https://git-hub-user-search-lilac.vercel.app/github/register">
                <button className='logout__btn' style={{color : white, backgroundColor: darkblack}}
                onClick={() => {
                    saveData("gituser", [])
                    saveData("gittoken", [])
                dispatch(loginSuccess())
                    navigate("/github/register")
                } }>LOGOUT</button>
                </a>
            </div>
        </div>
    )
}

export default Profile
