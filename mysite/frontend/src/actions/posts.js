import { GET_POSTS,DELETE_POST, ADD_POST, UPDATE_POST } from "./types"
import axios from "axios"
import {get_errors} from "./errorHandling"
import { createMessage } from "./messages"
export const getPosts = () => dispatch => {
    axios.get("/api/posts/")
    .then((res) =>{
        dispatch({
            type: GET_POSTS,
            payload: res.data
        })
    })
    .catch((err) =>dispatch(get_errors(err.response.data,err.response.status)))
}
export const deletePost = (id) => dispatch => {
    axios.delete(`/api/posts/${id}/`)
    .then(() => {
        dispatch({
            type: DELETE_POST,
            payload: id
        })
        dispatch(createMessage({ postDeleted: "Post has successfully been deleted!"}))
    })
    .catch((err) =>{
        console.log(err)
    })
}
export const addPost = (post) => dispatch => {
    axios.post("/api/posts/",post)
    .then((res) => {
        dispatch({
            type: ADD_POST,
            payload: res.data
        })
        dispatch(createMessage({postAdded:"Post added successfully!"}))
    })
    .catch((err) => dispatch(get_errors(err.response.data,err.response.status)))
}
export const editPost = (post,id) => dispatch => {
    axios.put(`/api/posts/${id}/`,post)
    .then((res) => {
        dispatch({
            type: UPDATE_POST,
            payload: res.data
        })
    })
    .catch((err) =>dispatch(get_errors(err.response.data,err.response.status)))
}

