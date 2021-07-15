import React from "react";
import { Link } from 'react-router-dom';
import { LeftOutlined } from "@ant-design/icons";
import { UnorderedListOutlined } from "@ant-design/icons";
import "./header.less";
class Header extends React.Component{
    constructor(props){
        super(props);
    }
    back(path){
        this.props.toPage(path)
        // this.history.goBack()
    } 
    
    render(){
        return (
            <div id="header-box">
                <div className="icon-box pointer" onClick={this.back.bind(this)}><LeftOutlined /></div>
                <h3 id="title">后台管理系统</h3>
                <div className="icon-box pointer"><UnorderedListOutlined /></div>
            </div>
        )
    }
}

export default Header;