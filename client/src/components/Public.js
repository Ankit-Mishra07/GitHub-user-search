import React,{useState, useEffect} from 'react'

const Public = () => {
    const [data, setData] = useState([])
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
                data.map((e) => {
                    
                })
            }
        </div>
    )
}

export default Public
