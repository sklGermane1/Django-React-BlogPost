import React,{useState} from 'react'
import {connect} from "react-redux"
import PropTypes from 'prop-types';
import {register} from "../../actions/auth"
import {createMessage} from "../../actions/messages"
import { Redirect } from 'react-router-dom';
import { render } from 'react-dom';
function Register(props) {
    const [values,setValues] = useState({
        username:"",
        email:"",
        password:"",
        confirm_password:""
    })
    const HandleSubmit = (e) => {
        e.preventDefault()
        const {email,username,password,confirm_password} = values
        if(password !== confirm_password){
            props.createMessage({
                passwordsNotMatch: "Passwords do not match"
            })
        }else{
            const newUser = {
                username,
                email,
                password
            }
            props.register(newUser)
            props.history.push("/login")
        }
    }
    const HandleChange = (e) =>{
        const {value,name} = e.target
         setValues(values => ({...values,[name]:value}))
        
    }
   
    
    return (
        <div className="container">
            <div className="shadow-lg bg-white bg-rouded mt-5 mb-5">
                <form onSubmit={(e) => HandleSubmit(e)}>
                    <legend className="text-center mt-3 mb-3">Register</legend>
                    <fieldset>
                        <div className="form-group container">
                            <input className="form-control" 
                            name="username" 
                            value={values.username} 
                            placeholder="username" 
                            onChange={(e) => HandleChange(e)} />   

                            <input className="form-control mt-3" 
                            name="email" 
                            value={values.email} 
                            placeholder="email" 
                            onChange={(e) => HandleChange(e)} />

                            <input className="form-control mt-3 mb-3" 
                            name="password" 
                            value={values.password} 
                            placeholder="password" 
                            type="password"
                            onChange={(e) => HandleChange(e)} />

                            <input className="form-control mt-3 mb-3" 
                            name="confirm_password" 
                            value={values.confirm_password} 
                            placeholder="confirm password" 
                            type="password"
                            onChange={(e) => HandleChange(e)} />

                        
                        </div>
                        <div className="form-group">
                            <button className="btn btn-outline-info" type="submit">Sign up</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}
Register.propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps,{register,createMessage})(Register)
