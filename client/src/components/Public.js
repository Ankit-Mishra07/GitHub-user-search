import React,{useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
const Public = () => {
    const [data, setData] = useState([])
    const {page} = useSelector(state => state.pageState)
    const getpublic = () => {
        fetch(`https://api.github.com/gists/public?page=${page}&per_page=5`)
        .then((res) => res.json())
        .then((res) => {
            setData(res)
        })
    }
    useEffect(() => {
        getpublic()
    },[])
    return (
        <div>
            {
                data.map((e) => (
                    <div className='public_cards'>
                        <div>
                            <img src={e.owner.avatar_url} alt="" />
                        </div>
                        <div>
                        <p>{e.owner.login}</p>
                        <a href={e.owner.html_url} target="_blank">Go To GitHub</a>
                        <a href={e.html_url}>Go To GitHub Gist</a>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Public
