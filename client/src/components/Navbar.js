import React,{useState} from 'react'
import { AppBar, Toolbar, Typography, makeStyles,Box, Input} from '@material-ui/core';
import { Link} from 'react-router-dom'
import {darkblack, white} from '../colors/colors'
import { useDispatch } from 'react-redux';
import { hideState } from '../Redux/State/action';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
    navbar : {
        display: "flex",
        justifyContent : "space-between",
        padding : "0 10%",
        backgroundColor : darkblack
    },
    logo : {
        color : white,
        fontSize : "28px",
        cursor: "pointer",
    },
    link : {
        textDecoration: "none",
        color : white,
        margin:"0 10px" 
    },
    input : {
        color: white,
        borderBottom :`1px solid ${white}`,
        width: "30%"
    }
})



const Navbar = () => {
    const navigate = useNavigate()

    const classes = useStyles()
    const dispatch = useDispatch()
    return (
        <AppBar>

        <Toolbar className={classes.navbar}>

            <Box>
            <Link to="/" className={classes.link, classes.logo}><i class="fab fa-github"></i></Link>
            </Box>
            <Input className={classes.input} placeholder='search users' onChange={() => navigate("/search") }/>
            <Box>
            <Link to="/" className={classes.link}>Home</Link>
            <Link to="/profile" className={classes.link}>Profile</Link>
            </Box>

        </Toolbar>
        </AppBar>
    )
}

export default Navbar
