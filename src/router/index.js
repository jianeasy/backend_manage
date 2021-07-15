import React from 'react';
import { renderRouters } from "react-router-config";
import { Redirect } from 'react-router-dom';
import App from "../app.jsx";
import Post from "../components/post/post.jsx";
import Login from "../components/login/login.jsx";
import Main from "../components/main/main.jsx";
const routers = [
    {
        path:'/login',
        component: Login,
    },
    {
        path: "/",
        exact: true,
        render: ()=> (<Redirect to={"/index"}/>),
        
    },
    {
        path:"/index",
        component: Main
    },
    {
        path:"/post-blog",
        component: Post

    }
]
export default routers;  