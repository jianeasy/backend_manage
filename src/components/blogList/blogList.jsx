import React from 'react';
import Action from '../action/action.jsx';
import { EditFilled } from '@ant-design/icons'
import "./blogList.less";
class BlogList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            blogList: ["二叉树", "链表", "哈希表"]
        }
    }
    getBlogList(){
        let url = this.url + `bloglist`;
        this.axios.get(url).then((res)=>{
            console.log(res.data);
            this.setState(
               {
                   blogList: res.data
               }
            )
        });  
    }
    componentDidMount(){
        this.getBlogList();
    }
    render(){
        let blogList = this.state.blogList.map((blog, index)=>{
            return (

                <div className="blog-item">
                  
                    <div key={blog.id} >
                        {blog.title}
                    </div>
                    <EditFilled style={{color:"#87cefa"}}  />
                </div>
            )
        })
        return (
            <div className="blog">
              
                {blogList}
            </div>
        )
    }
}
export default BlogList;