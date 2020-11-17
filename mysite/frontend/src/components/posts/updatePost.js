import React,{useState,useEffect} from 'react'
import {connect} from "react-redux"
import PropTypes from 'prop-types';
import {useHistory,useParams} from "react-router-dom"
import {editPost} from "../../actions/posts"
import axios from "axios"
function UpdatePost(props){
    let history = useHistory()
    
    const [values,setValues] = useState({
        title:"",
        content:"",
    }) 
    const { id } = useParams()
    useEffect(() => {
        const getData = (id) => {
            axios.get(`/api/posts/${id}/`)
            .then((res) =>{
                setValues({
                    title: res.data.title,
                    content: res.data.content
                })
            })
            .catch(err =>{
                console.log(err)
            })
        }
        getData(id)
    },[])
    const handleChange = (e) => {
        const { value,name } = e.target
        setValues(values => ({...values,[name]:value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const post = {
            title: values.title,
            content: values.content
        }
        props.editPost(post,id)
        setValues({
            title:"",
            content:"",
        })
        props.history.push("/")
    }
    return (
        <div className="container">
            <div className="shadow bg-white rounded mt-5 mb-5">
                <div className="container">
                <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                <legend className="text-center mb-3 mt-3">Edit Post</legend>
                    <fieldset>
                    <div className="form-group">
                        <input className="form-control" name="title" value={values.title} onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" name="content" value={values.content} onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-outline-info">edit</button>
                    </div>
                    </fieldset>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
UpdatePost.propTypes = {
    editPost: PropTypes.func.isRequired
}
export default connect(null,{editPost})(UpdatePost)
