import React,{useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserLoading, getUserSuccess } from '../Redux/Github/action'
import '../styles/search.css'
import { cardback, white } from '../colors/colors'
import { dscPage, incPage } from '../Redux/Pages/action'
import { SearchdscPage, SearchincPage } from '../Redux/SearchPage/action'

const Search = () => {

    const {username} = useParams()
    const page = useSelector(state => state.SearchPageState)
    const {data, isLoading, isError} = useSelector(state => state.searchState)
    const dispatch = useDispatch()
    const getUsers = () => {
        dispatch(getUserLoading())
        fetch(`https://api.github.com/search/users?q=${username}&page=${page}&per_page=8`)
        .then((res) => res.json())
        .then(res => {
            dispatch(getUserSuccess(res.items))
            console.log(res)
        }) 
    }


    useEffect(() => {
       let isset = setTimeout(() => {

            getUsers()
        }, 2000)

        return () => {
            clearTimeout(isset)
        }
    }, [username, page])

    if(isLoading) {
        return <div className='loading'>...Loading</div>
    }

    return (
        <div>
        <div className='search_container'>
            {
                data.map((e) => (
                    <div className='user_card' style={{color: white}}>
                        <div>
                            <img src={e.avatar_url} alt="" />
                        </div>
                        <div style={{color: white}} className='textbox'>
                            <p style={{color: white}}>Username : {e.login}</p>
                            <a href={e.html_url} style={{color: white}} className='githubbtn' target="_blank">GitHub</a>
                        </div>
                    </div>
                ))
            }


        </div>
            
            <div className='btnbox'>
                <button disabled={page == 1} onClick={() => dispatch(SearchdscPage(1))} className='prevbtn' style={{backgroundColor : cardback, color: white}}>PREV</button>
                <button onClick={() => dispatch(SearchincPage(1))} className='nextbtn' style={{backgroundColor : cardback, color: white}}>NEXT</button>
            </div>
        </div>
    )
}

export default Search
