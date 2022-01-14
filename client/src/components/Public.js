import React,{useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {cardback, white} from '../colors/colors'
import {Link} from 'react-router-dom'
import '../styles/public.css'
import { dscPage, incPage } from '../Redux/Pages/action'
const Public = () => {
    const [data, setData] = useState([])
    const {page} = useSelector(state => state.pageState)
    const dispatch = useDispatch()
    const getpublic = () => {
        fetch(`https://api.github.com/gists/public?page=${page}&per_page=8 `)
        .then((res) => res.json())
        .then((res) => {
            setData(res)
        })
    }
    useEffect(() => {
        getpublic()
    },[page])
    return (
        <div className='public_container'>
            <button className='public_btn' style={{backgroundColor : cardback, color: white}}>Public GitHub Gist</button>
            <div className='public_card_cont' >
            {
                data.map((e, i) => (
                    <div className='public_cards' style={{backgroundColor : cardback}} key={i}>
                        <Link to="">
                            <img src={e.owner.avatar_url} alt="" />
                        </Link>
                        <div className='text_box'>
                        <p style={{color : white}}>Filename : {Object.keys(e.files)[0].substring(0, 20)}</p>
                        <p style={{color : white}}>Username : {e.owner.login} </p>
                        <a href={e.owner.html_url} className='goto' target="_blank" style={{color : white, float : "left"}}>Go To GitHub</a>
                        <a href={e.html_url} className='goto' target="_blank" style={{color : white, float : "right"}}>Go To GitHub Gist</a>
                        </div>
                    </div>
                ))
            }
            </div>

            <div className='btnbox'>
                <button disabled={page == 1} onClick={() => dispatch(dscPage(1))} className='prevbtn' style={{backgroundColor : cardback, color: white}}>PREV</button>
                <button onClick={() => dispatch(incPage(1))} className='nextbtn' style={{backgroundColor : cardback, color: white}}>NEXT</button>
            </div>
        </div>
    )
}

export default Public
