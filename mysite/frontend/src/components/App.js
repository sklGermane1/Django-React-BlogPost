import React,{Fragment} from 'react'
import ReactDOM from "react-dom"
import {HashRouter as Router, Route, Switch} from "react-router-dom"
import Navbar from "./layout/Navbar"
import CreatePost from './posts/createPost'
import Posts from "./posts/posts"
import UpdatePost from './posts/updatePost'
import About from "./common/about"
function App(){
    return (
        <Fragment>
        <Navbar />
        <Router>
        <Switch>
            <Route exact path="/" component={Posts} />
            <Route exact path="/create-post" component={CreatePost} />
            <Route exact path="/update-post" component={UpdatePost} />
            <Route exact path="/about" component={About} />
        </Switch>
        </Router>
        </Fragment>
    )
}

ReactDOM.render(<App />,document.getElementById("app"))

export default App
