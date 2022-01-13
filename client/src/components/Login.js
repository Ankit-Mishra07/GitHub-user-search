import React,{useState} from 'react'
import { loginRequest,loginInvalid, loginSuccess, loginFailure } from '../Redux/Login/action'
import {useDispatch, useSelector} from 'react-redux'
import { saveData } from '../utils/localstorage'

const Login = () => {

    const [form, setForm] = useState({})

    const {isLoading, token, isError, message} = useSelector(state => state.logState)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        let {name, value} = e.target
        setForm({
            ...form,
            [name] : value
        })
    }



    const UserLogin = (e) => {
        e.preventDefault()
        dispatch(loginRequest())
        fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
            method : 'POST',
            body : JSON.stringify(form),
            headers : {
                "Content-Type" : "application/json"
            }
        })
        .then(res => res.json())
        .then((res) => {
            console.log("res",  res)
            if(res.error) {
                dispatch(loginInvalid(res.message))
            }else{
                dispatch(loginSuccess(res.token))
                fetchMyData(res.token, form.username)
            }
        })
        .catch((err) => {
            dispatch(loginFailure(err))
        })
    }


    const fetchMyData = (token, username) => {
        fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
            headers: {
                "Content-Type" : "application/json",
                Authorization : `Bearer ${token}` ,
            },
        })
        .then(res => res.json())
        .then(res => {
            saveData("gituser", [res])
        })
        .catch((e) => {
            console.log(e)
        })
    }



    return (
        <div>
            <h1>{message}</h1>
            <form method='POST'>
                <input type="text" name='username' placeholder='username' onChange={(e) => handleChange(e)}/>
                <input type="password" name='password' placeholder='password' onChange={(e) => handleChange(e)}/>
                <button onClick={(e) => UserLogin(e)}>Login</button>
            </form>
        </div>
    )
}

export default Login
