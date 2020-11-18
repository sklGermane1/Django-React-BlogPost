import {AUTH_ERROR,USER_LOADED,USER_LOADING,LOGIN_SUCCESS,LOGIN_FAIL,REGISTER_FAIL,REGISTER_SUCCESS,LOGOUT_SUCCESS} from "../actions/types"


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
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            
            localStorage.setItem("token",action.payload.token)
            return{
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false
            }
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case REGISTER_FAIL:
        case LOGOUT_SUCCESS:
            localStorage.removeItem("token")
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