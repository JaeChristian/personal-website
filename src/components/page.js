import React from "react";
import Home from "../pages/home";
import Posts from "../pages/posts";
import Projects from "../pages/projects";
import { AnimatePresence, motion} from "framer-motion";

function Page({page, setTextMessage}){
    if(page==="home") {
        return(
            <AnimatePresence exitBeforeEnter initial={true}>
                <Home setTextMessage={setTextMessage}/>
            </AnimatePresence>
        );
    } else if(page==="projects") {
        return(
            <AnimatePresence exitBeforeEnter initial={true}>
                <Projects setTextMessage={setTextMessage}/>
            </AnimatePresence>
        );
    } else if(page==="posts") {
        return(
            <AnimatePresence exitBeforeEnter initial={true}>
                <Posts setTextMessage={setTextMessage}/>
            </AnimatePresence>
        );
    }
}
export default Page;