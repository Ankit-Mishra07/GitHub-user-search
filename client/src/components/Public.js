import React,{useState, useEffect} from 'react'

const Public = () => {
    const [page, setPage] = useState(1)
    const getpublic = () => {
        fetch(`https://api.github.com/gists/public?page=${page}&per_page=5`)
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
        })
    }
    useEffect(() => {
        getpublic()
    },[])
    return (
        <div>
            
        </div>
    )
}

export default Public
