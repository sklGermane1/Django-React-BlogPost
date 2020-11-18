import React,{useState} from 'react'
import {connect} from "react-redux"
import PropTypes from 'prop-types';
import {login} from "../../actions/auth"
import {Redirect} from "react-router-dom"
function Login(props) {
    const [values,setValues] = useState({
        username:"",
        password:""
    })
    const HandleSubmit = (e) => {
        e.preventDefault()
        props.login({
            username: values.username,
            password: values.password
        })
        props.history.push("/")
    }
    const HandleChange = (e) =>{
        const {value,name} = e.target
         setValues(values => ({...values,[name]:value}))
    }
    return (
  
        <div className="container">
            <div className="shadow-lg bg-white bg-rouded mt-5 mb-5">
                <form onSubmit={(e) => HandleSubmit(e)}>
                    <legend className="text-center mt-3 mb-3">Login</legend>
                    <fieldset>
                        <div className="form-group container">
                            <input className="form-control" 
                            name="username" 
                            value={values.username} 
                            placeholder="username" 
                            onChange={(e) => HandleChange(e)} />           

                            <input className="form-control mt-3" 
                            name="password" 
                            type="password"
                            value={values.password} 
                            placeholder="password" 
                            onChange={(e) => HandleChange(e)} />
                       
                        </div>
                        <div className="form-group">
                            <button className="btn btn-outline-info" type="submit">Login</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}
Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps,{login})(Login)
