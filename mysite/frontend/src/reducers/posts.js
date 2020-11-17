import {GET_POSTS,DELETE_POST,ADD_POST,UPDATE_POST} from "../actions/types";

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
    case ADD_POST:
        return{
            ...state,
            posts: [...state.posts,action.payload]
        }
    case UPDATE_POST:
        return{
            ...state,
        }
        default:
            return state
    }
}