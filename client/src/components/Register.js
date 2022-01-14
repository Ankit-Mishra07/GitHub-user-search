import React,{useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { regFailure, regRequest, regSuccess } from '../Redux/Register/action'
import { useNavigate , Link} from 'react-router-dom'
import {cardback} from "../colors/colors"
import '../styles/register.css'

const Register = () => {

    const [form, setForm] = useState({})

    const {isLoading, message, isError} = useSelector((state) => state.regState)
    console.log(isLoading, message, isError)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const handleChange = (e) => {
        let {name, value} = e.target
        setForm({
            ...form,
            [name] : value
        })
    }

    const UserRegister = () => {
        dispatch(regRequest())
        fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
            method: 'POST',
            body : JSON.stringify(form),
            headers : {
                "Content-Type" : "application/json"
            }
        }).then(res => res.json())
        .then((res) => {
            dispatch(regSuccess(res.message))
            navigate("/github/login")
        })
        .catch((err) => {
            dispatch(regFailure(err.message))
        })
    }

    // useEffect(() => {
    //     UserRegister()
       
    // }, [])

    if(isLoading) {
        return (<div style={{color: "#fff", fontWeight : 600, marginTop: "180px"}}>...Loading</div>)
    }
    if(isError) {
        return (<div>Something went wrong</div>)
    }

    return (
        <div className='register_box' >
            <div className='register_logogog'><i class="fab fa-github"></i></div>
            <h6>{message}</h6>
            <form method='POST' className='form'>
                <input type="text" placeholder='name' name='name' onChange={(e) => handleChange(e)}/>
                <input type="email" placeholder='email' name='email' onChange={(e) => handleChange(e)}/>
                <input type="password" placeholder='password' name='password' onChange={(e) => handleChange(e)}/>
                <input type="text" placeholder='username' name='username' onChange={(e) => handleChange(e)}/>
                <input type="number" placeholder='mobile number' name='mobile' onChange={(e) => handleChange(e)}/>
                <input type="text" placeholder='description' name='description' onChange={(e) => handleChange(e)}/>
                <button onClick={UserRegister}>Register</button>
                <Link to="/github/login" style={{color: "#fff", marginTop: "20px"}}>Already Registered</Link>
            </form>
        </div>
    )
}

export default Register
