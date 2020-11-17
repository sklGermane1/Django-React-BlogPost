import React,{Fragment} from 'react'
import ReactDOM from "react-dom"
import {HashRouter as Router, Route, Switch} from "react-router-dom"
import Navbar from "./layout/Navbar"
import CreatePost from './posts/createPost'
import Posts from "./posts/posts"
import UpdatePost from './posts/updatePost'
import About from "./common/about"
import {Provider} from "react-redux"
import store from "../store"
import DetailPage from "./posts/detailPage"
import detailPage from './posts/detailPage'
function App(){
    return (
        <Provider store={store}>
        <Fragment>
        <Navbar />
        <Router>
        <Switch>
            <Route exact path="/" component={Posts} />
            <Route exact path="/create-post" component={CreatePost} />
            <Route exact path="/update-post/:id" component={UpdatePost} />
            <Route exact path="/about" component={About} />
            <Route exact path="/detail/:id" component={detailPage} />
        </Switch>
        </Router>
        </Fragment>
        </Provider>
    )
}

ReactDOM.render(<App />,document.getElementById("app"))

export default App
