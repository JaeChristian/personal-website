import React from "react";
import Home from "../pages/home";
import Posts from "../pages/posts";
import Projects from "../pages/projects";
import NPlatform from "../pages/projects/nplatform"
import Nventory from "../pages/projects/nventory"

import { AnimatePresence, motion} from "framer-motion";

function Page({Page, setPage, setTextMessage}){
    if(Page==="home") {
        return(
            <AnimatePresence exitBeforeEnter initial={true}>
                <Home setTextMessage={setTextMessage}/>
            </AnimatePresence>
        );
    } else if(Page==="projects") {
        return(
            <AnimatePresence exitBeforeEnter initial={true}>
                <Projects setTextMessage={setTextMessage} setPage={setPage}/>
            </AnimatePresence>
        );
    } else if(Page==="posts") {
        return(
            <AnimatePresence exitBeforeEnter initial={true}>
                <Posts setTextMessage={setTextMessage}/>
            </AnimatePresence>
        );
    } else if(Page==="projects.nplatform") {
        return(
            <AnimatePresence exitBeforeEnter initial={true}>
                <NPlatform setTextMessage={setTextMessage} setPage={setPage}/>
            </AnimatePresence>
        );
    } else if(Page==="projects.nventory") {
        return(
            <AnimatePresence exitBeforeEnter initial={true}>
                <Nventory setTextMessage={setTextMessage} setPage={setPage}/>
            </AnimatePresence>
        );
    }
}
export default Page;