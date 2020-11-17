import { GET_ERRORS } from "./types"


export const get_errors = (msg,status) => {
    return{
            type: GET_ERRORS,
            payload: {msg,status}
    }
}