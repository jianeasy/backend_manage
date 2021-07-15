import React from "react";
import { Switch, Route } from 'react-router-dom';
import Header from '../header/header.jsx';
import BreadCrumb from '../breadcrumb/breadcrumb.jsx';
import BlogList from "../blogList/blogList.jsx";
import Login from "../login/login.jsx";
import "./main.less";

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            breadCrumbTitle:"选择",
            
        }
        this.map = new Map();
        this.map.set("页面设置", "page-setting");
        this.map.set("文章发布", "post-blog");
        this.map.set("留言管理", "message-manage");
        this.map.set("文章管理", "blog-manage");
    }
    toPage(e){
        if(e.target.className == "option-item"){
            let routeName = e.target.innerText;
            this.props.history.push({pathname: this.map.get(routeName), state:{name: routeName}});
        }
    }
    render(){
        return (
            <div id="main">
                <Switch>
                   
                    <div>
                        <Header></Header>
                        <BreadCrumb name={this.state.breadCrumbTitle}></BreadCrumb>
                        <div id="option-box" onClick={(e)=>this.toPage.bind(this, e)()}>
                            <div className={"option-item"} style={{backgroundColor:"#87ce", borderRadius:"5px", cursor:"pointer"}}>文章发布</div>
                            <div className={"option-item"} style={{backgroundColor:"#87ce", borderRadius:"5px", cursor:"pointer"}}>文章管理</div>
                            <div className={"option-item"} style={{backgroundColor:"#87ce", borderRadius:"5px", cursor:"pointer"}}>页面设置</div>
                            <div className={"option-item"} style={{backgroundColor:"#87ce", borderRadius:"5px", cursor:"pointer"}}>留言管理</div>
                        </div>
                       
                    </div>
                </Switch>
               
            </div>
        )
    }
    
}
export default Main;