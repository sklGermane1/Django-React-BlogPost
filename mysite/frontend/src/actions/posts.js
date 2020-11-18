import { GET_POSTS,DELETE_POST, ADD_POST, UPDATE_POST } from "./types"
import axios from "axios"
import {get_errors} from "./errorHandling"
import { createMessage } from "./messages"
import {tokenConfig} from "./auth"
export const getPosts = () => (dispatch,getState) => {
    axios.get("/api/posts/",tokenConfig(getState))
    .then((res) =>{
        dispatch({
            type: GET_POSTS,
            payload: res.data
        })
    })
    .catch((err) =>dispatch(get_errors(err.response.data,err.response.status)))
}
export const deletePost = (id) => (dispatch,getState) => {
    axios.delete(`/api/posts/${id}/`,tokenConfig(getState))
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
export const addPost = (post) => (dispatch,getState) => {
    axios.post("/api/posts/",post,tokenConfig(getState))
    .then((res) => {
        dispatch({
            type: ADD_POST,
            payload: res.data
        })
        dispatch(createMessage({postAdded:"Post added successfully!"}))
    })
    .catch((err) => dispatch(get_errors(err.response.data,err.response.status)))
}
export const editPost = (post,id) => (dispatch,getState) => {
    axios.put(`/api/posts/${id}/`,post,tokenConfig(getState))
    .then((res) => {
        dispatch({
            type: UPDATE_POST,
            payload: res.data
        })
    })
    .catch((err) =>dispatch(get_errors(err.response.data,err.response.status)))
}

