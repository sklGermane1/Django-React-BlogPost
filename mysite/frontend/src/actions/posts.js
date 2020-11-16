import { GET_POSTS,DELETE_POST } from "./types"
import axios from "axios"

export const getPosts = () => dispatch => {
    axios.get("/api/posts/")
    .then((res) =>{
        dispatch({
            type: GET_POSTS,
            payload: res.data
        })
    })
    .catch((err) =>{
        console.log(err)
    })
}
export const deletePost = (id) => dispatch => {
    axios.delete(`/api/posts/${id}/`)
    .then(() => {
        dispatch({
            type: DELETE_POST,
            payload: id
        })
    })
    .catch((err) =>{
        console.log(err)
    })
}