import React, { Fragment,useRef,useEffect,useState} from 'react'
import { withAlert } from "react-alert"
import {connect} from "react-redux"
import PropTypes from 'prop-types';
function Alerts(props) {
    const { error,alert,message } = props
    const mounted = useRef()
    useEffect(() => {
        if(!mounted.current){
            mounted.current = true
            return;
        }
        else{
 
        if(error){
            if(error.msg.title) alert.error(`Title: ${error.msg.title.join()}`)
            
            if(error.msg.content) alert.error(`Content: ${error.msg.content.join()}`)
                        
            if(error.msg.username) alert.error(error.msg.username.join())
            
        }
        if(message){   
        if(message.postDeleted){
            if(message.postDeleted) alert.success(message.postDeleted)
        }
        if(message.postAdded){
            if(message.postAdded) alert.success(message.postAdded)
        }
        if(message.passwordsNotMatch) alert.error(message.passwordsNotMatch)
        }

    }
    })
    return (
        <Fragment />
    )
}
Alerts.propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
})
export default connect(mapStateToProps)(withAlert()(Alerts))
