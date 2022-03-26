import {chakra, shouldForwardProp} from "@chakra-ui/react"
import {motion} from "framer-motion"
import { styled } from "@emotion/styled"

const AnimatedDiv = chakra(motion.div, {
    shouldForwardProp: prop=> {
        return shouldForwardProp(prop) || prop === "transition"
    }
});

const Section = ({children, delay = 0})=>{
    return(
    <AnimatedDiv
        initial={{y: 10, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 0.3, delay}}
        exit={{opacity: 0}}
    >
        {children}
    </AnimatedDiv>)
    ;
}

export default Section;