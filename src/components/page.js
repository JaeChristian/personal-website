import React from "react";
import Home from "../pages/home";
import Posts from "../pages/posts";
import Projects from "../pages/projects";

function Page({page, setTextMessage}){
    if(page==="home") {
        return(
            <Home setTextMessage={setTextMessage}/>
        );
    } else if(page==="projects") {
        return(
            <Projects setTextMessage={setTextMessage}/>
        );
    } else if(page==="posts") {
        return(
            <Posts setTextMessage={setTextMessage}/>
        );
    }
}
export default Page;