import {AUTH_ERROR,USER_LOADED,USER_LOADING} from "../actions/types"


const inititalState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    isLoading: false,
    user: null 
}


export default function(state=inititalState,action){
    switch(action.type){
        case USER_LOADING:
            return{
                ...state,
                isLoading: true 
            }
        case USER_LOADED:
            return{
                ...state,
                isLoading: false,
                isAuthenticated: true,
                user: action.payload
            }
        case AUTH_ERROR:
            return{
                ...state,
                isAuthenticated: null,
                isLoading: false,
                user: null
            }
        default:
            return state
    }
}