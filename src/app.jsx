import React from 'react'
import ReactDom from 'react-dom';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import axios  from 'axios' ;
import { createStore } from 'redux';
import './app.less';
import Login from './components/login/login.jsx';
import counterReducer from "./counter.reducer.js";

import routes from './router/index.js';
React.Component.prototype.axios = axios;
React.Component.prototype.url = "http://47.112.147.9:3000/";
React.Component.prototype.history = createBrowserHistory();



function reducer(){
    return {
        count: 0
    }
}
const store = createStore(counterReducer);
//console.log(store.getState());


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoginIn: true,
        }
    }
    getLoginState(isLoginIn){
        this.setState({
            isLoginIn: isLoginIn
        });
    }
   
    render(){
        let isLoginIn = this.state.isLoginIn;
        let loginComponent = (<Login getLoginState={this.getLoginState.bind(this)}></Login>);  
        return (
            <div id="app">
                <Router>
                    {renderRoutes(routes)}
                </Router>
            </div>
        )
    }
}

ReactDom.render(<App/>, document.getElementById("app"));
export default App;