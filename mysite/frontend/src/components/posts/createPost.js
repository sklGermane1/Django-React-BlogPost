import React,{useState} from 'react'
import {connect} from "react-redux"
import PropTypes from 'prop-types';
import {addPost} from "../../actions/posts"
function CreatePost(props){
    const [values,setValues] = useState({
        title:"",
        content:"",
    })
    const handleChange = (e) => {
        const { value,name } = e.target
        setValues(values => ({...values,[name]:value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values.title,"TITLE",values.content,"CONTENT")
        const post = {
            title: values.title,
            content: values.content
        }
        props.addPost(post)
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
                    <legend className="text-center mb-3 mt-3">Create Post</legend>
                    <fieldset>
                    <div className="form-group">
                        <input className="form-control" name="title" value={values.title} onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" name="content" value={values.content} onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-outline-info">Add Post</button>
                    </div>
                    </fieldset>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
CreatePost.propTypes = {
    addPost: PropTypes.func.isRequired
}
export default connect(null,{addPost})(CreatePost)
