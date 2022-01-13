import React,{useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { regFailure, regRequest, regSuccess } from '../Redux/Register/action'
import { useNavigate } from 'react-router-dom'
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
        return (<div>...Loading</div>)
    }
    if(isError) {
        return (<div>Something went wrong</div>)
    }

    return (
        <div>
            <h1>{message}</h1>
            <form method='POST'>
                <input type="text" placeholder='name' name='name' onChange={(e) => handleChange(e)}/>
                <input type="email" placeholder='email' name='email' onChange={(e) => handleChange(e)}/>
                <input type="password" placeholder='password' name='password' onChange={(e) => handleChange(e)}/>
                <input type="text" placeholder='username' name='username' onChange={(e) => handleChange(e)}/>
                <input type="number" placeholder='mobile number' name='mobile' onChange={(e) => handleChange(e)}/>
                <input type="text" placeholder='description' name='description' onChange={(e) => handleChange(e)}/>
                <button onClick={UserRegister}>Register</button>
            </form>
        </div>
    )
}

export default Register
