import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"
function detailPage() {
    const { id } = useParams()
    const [values,setValues] = useState({
        title:"",
        content:"",
        created_at:""
    })
    useEffect(() =>{
        axios.get(`/api/posts/${id}`)
        .then((res) =>{
            setValues({
                title: res.data.title,
                content: res.data.content,
                created_at:res.data.created_at
            })
            console.log(res.data)
        })
        .catch((err) =>{
            console.log(err)
        })
    },[])
    return (
        <div className="container">
            <h1 className="text-center mt-3">Post by AUTHOR</h1>
            <hr />
            
                <div className="card shadow-lg bg-white rounded mt-5 mb-5">
                <div className="card-body">
                    <h5 className="card-title d-flex">
                     {values.title}
                    <span className="ml-3">by AUTHOR</span> <span className=" ml-auto text-muted">
                    {values.created_at}</span>
                    </h5>
                    <p className="card-text">{values.content}</p>
                </div>
            </div>   
        </div>
    )
}




export default detailPage
