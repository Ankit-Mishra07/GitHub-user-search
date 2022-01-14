import React,{useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserLoading, getUserSuccess } from '../Redux/Github/action'
import '../styles/search.css'

const Search = () => {

    const {username} = useParams()
    const page = useSelector(state => state.pageState)
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
      getUsers()
    }, [username])

    if(isLoading) {
        return <div className='loading'>...Loading</div>
    }

    return (
        <div className='search_container'>
            {
                data.map((e) => (
                    <div className='user_card'>
                        <div>
                            <img src={e.avatar_url} alt="" />
                        </div>
                        <div>
                            <p>Username : {e.login}</p>
                            <a href={e.html_url}>GitHub</a>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Search
