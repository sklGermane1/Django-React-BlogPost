import React,{Fragment,useEffect} from 'react'
import ReactDOM from "react-dom"
import {HashRouter as Router, Route, Switch} from "react-router-dom"
import Navbar from "./layout/Navbar"
import CreatePost from './posts/createPost'
import Posts from "./posts/posts"
import UpdatePost from './posts/updatePost'
import About from "./common/about"
import {connect, Provider} from "react-redux"
import store from "../store"
import detailPage from './posts/detailPage'
import { Provider as AlertProvider } from "react-alert"
import AlertTemplate from "react-alert-template-basic"
import Alerts from './alerts'
import PrivateRoute from './common/PrivateRoute'
import { loadUser } from '../actions/auth'
import Login from './auth/login'
import Register from './auth/register'
const alertOptions = {
    timeout: 3000,
    position: "top center"
}
function App(){
    useEffect(() => store.dispatch(loadUser()),[])
    return (
        <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
        <Fragment>
        <Navbar />
        <Alerts />
        <Router>
        <Switch>
            <PrivateRoute exact path="/" component={Posts} />
            <PrivateRoute exact path="/create-post" component={CreatePost} />
            <PrivateRoute exact path="/update-post/:id" component={UpdatePost} />
            <Route exact path="/about" component={About} />
            <PrivateRoute exact path="/detail/:id" component={detailPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
        </Switch>
        </Router>
        </Fragment>
        </AlertProvider>
        </Provider>
    )
}

ReactDOM.render(<App />,document.getElementById("app"))


export default App
