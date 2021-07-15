import React from "react";
import Action from "../action/action.jsx";
import "./login.less";
class Login extends React.Component{
    constructor(props){
        super(props);
    }

    login(username, password){
     
        this.props.getLoginState(true);
        // this.axios.post(url, data).then((res)=>{

        // })
    }
    render(){
        console.log(this.props);
        return (
            <div id="login-box">
            
                <div><span>账号</span><input type="text" /></div>
                <div><span>密码</span><input type="password"/></div>
                <div><button onClick={this.login.bind(this)}>登录</button></div>
                {/* <Action></Action> */}
            </div>
        )
    }
}
export default Login;