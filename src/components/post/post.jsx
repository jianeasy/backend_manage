import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../header/header.jsx'
import BreadCrumb from '../breadcrumb/breadcrumb.jsx';
import "./post.less";
import { DashOutlined, LogoutOutlined } from '@ant-design/icons'

class Post extends React.Component{

    constructor(props){
        super(props);

        this.data = {
            title:"",
            tag:"",
            date:""
        }
    }
    
    //双向绑定
    bindData(dataName, e){
        this.data[dataName] = e.target.value;
        console.log( this.data[dataName]);
    }
    toPage(){
        this.props.history.goBack()
    }
    render(){
        return(
            <div id="main">
               
                    <Header toPage={this.toPage.bind(this)}></Header>
                    <BreadCrumb name={this.props.location.state.name}></BreadCrumb>
                    <div id="post-box" >
                        <div className="form-box">
                            <div className="form-item">
                                <span className="label">标题</span>
                                <input className="input-box" type="text" onChange={(e)=>this.bindData.bind(this, "title", e)()}/>
                            </div>

                        </div>
                    </div>
               
                
                
            </div>
        )
    }
}
export default Post;