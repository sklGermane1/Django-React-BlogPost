import React from 'react'
import {connect} from "react-redux"
import PropTypes from 'prop-types';
import {logout} from "../../actions/auth"
function Navbar(props){
    return (
      <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark"> 
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button> 
   
      {props.isAuthenticated ? (   
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="#">Home</a>   
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">        
        <li className="nav-item">
            <a className="nav-link" href="/#/about">About</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/#/create-post">Create Post</a>
        </li>
        <li className="nav-item">
            <button className="nav-link btn btn-outline-info" onClick={props.logout()}>logout</button>
        </li>
      </ul> 
      </div>
      ) : (
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="/#/about">About</a>   
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">        
        <li className="nav-item">
            <a className="nav-link" href="/#/login">Login</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/#/register">Register</a>
        </li>
      </ul> 
      </div>
      )}
       
 
 
  
 
 
</nav>
</div>
    )
}
Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired 
}
const mapStateToProps = (state) => ({
  auth: state.auth
})

export default  connect(mapStateToProps,{logout})(Navbar)
