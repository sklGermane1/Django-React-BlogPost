import {USER_LOADING,USER_LOADED,AUTH_ERROR,LOGIN_SUCCESS,LOGIN_FAIL, REGISTER_FAIL, REGISTER_SUCCESS, LOGOUT_SUCCESS} from "./types"
import axios from "axios"
import {get_errors} from "./errorHandling"

export const loadUser = () => (dispatch,getState) => {
    dispatch({
        type: USER_LOADING
    })
    axios.get("api/auth/user",tokenConfig(getState))
    .then(res => {
        dispatch({
            type: USER_LOADED,
            payload: res.data 
        })
    })
    .catch((err) =>{
        dispatch(get_errors(err.response.data,err.response.status))
        dispatch({
            type: AUTH_ERROR
        })
    })
}


export const login = ({username,password}) => dispatch => {
    const config = {
        headers:{
            "Content-Type":"application/json"
        }
    }
    const body = JSON.stringify({username,password})
    axios.post("api/auth/login",body,config)
    .then(res => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data 
        })
    })
    .catch((err) =>{
        dispatch(get_errors(err.response.data,err.response.status))
        dispatch({
            type: LOGIN_FAIL
        })
    })
}

export const register = ({username,email,password}) => dispatch => {
    const config = {
        headers:{
            "Content-Type":"application/json"
        }
    }
    const body = JSON.stringify({username,password,email})
    axios.post("api/auth/register",body,config)
    .then(res => {
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data 
        })
    })
    .catch((err) =>{
        dispatch(get_errors(err.response.data,err.response.status))
        dispatch({
            type: REGISTER_FAIL
        })
    })
}


export const logout = () => (dispatch,getState) => {
    axios.get("api/auth/logout",null,tokenConfig(getState))
    .then(res => {
        dispatch({
            type: LOGOUT_SUCCESS
        })
    })
    .catch((err) =>{
        dispatch(get_errors(err.response.data,err.response.status))
    })
}

export const tokenConfig = getState => {
    const token = getState().auth.token 

    const config = {
        headers:{
            "Content-Type":"application/json"
        }
    }
    if(token){
        config.headers["Authorization"] = `Token ${token}`
    }
    return config
}