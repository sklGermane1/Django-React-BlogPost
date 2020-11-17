import React,{useEffect} from 'react'
import {connect} from "react-redux"
import {getPosts,deletePost} from "../../actions/posts"
import PropTypes from 'prop-types';
function Posts(props){
    useEffect(() =>{
        props.getPosts()
    })
    const handleEdit = (id) => {
        props.history.push(`/update-post/${id}`)
    }
    const detailPage = (id) => {
        props.history.push(`/detail/${id}`)
    }
    return (
        <div className="container">
            <h1 className="text-center mt-3">Posts</h1>
            <hr />
            {props.posts.map(post => (
                <div className="card shadow-lg bg-white rounded mt-5 mb-5" key={post.id}>
                <div className="card-body">
                    <h5 className="card-title d-flex">
                    <a onClick={() => detailPage(post.id)}>{post.title}</a>
                    <span className="ml-3">by AUTHOR</span> <span className=" ml-auto text-muted">
                    {post.created_at}</span>
                    </h5>
                    <p className="card-text">{post.content}</p>
                </div>
                <div className="form-group d-flex">
                    <div className="ml-auto">
                        <button className="btn btn-outline-danger mr-2" onClick={() => props.deletePost(post.id)}>Delete</button>
                        <button className="btn btn-outline-info mr-2" onClick={() => handleEdit(post.id)}>Edit</button>
                    </div>
                </div>
            </div>   
            ))}
        </div>
    )
}
Posts.propTypes = {
    posts: PropTypes.array.isRequired,
    deletePost: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    posts: state.posts.posts
})

export default connect(mapStateToProps,{getPosts,deletePost})(Posts)
