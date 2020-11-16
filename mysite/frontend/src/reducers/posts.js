import {GET_POSTS,DELETE_POST} from "../actions/types";

const initialState = {
    posts:[]
}

export default function(state=initialState,action){
    switch(action.type){
    case GET_POSTS:
        return{
            ...state,
            posts: action.payload
        }
    case DELETE_POST:
        return{
            ...state,
            posts: state.posts.filter(post => post.id !== action.payload)
        }
        default:
            return state
    }
}