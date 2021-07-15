import React from 'react';
import "./breadcrumb.less";

class BreadCrumb extends React.Component{

    render(){
        
        return (
            <div className="bread-crumb">{this.props.name}</div>
        )
    }
}
export default BreadCrumb;