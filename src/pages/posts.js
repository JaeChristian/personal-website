import React, {useEffect} from "react";
import {Container} from "@chakra-ui/react"

function Posts({setTextMessage}) {
    const TextMessage = "Enjoy some of my content outside of coding!";
    useEffect(()=>{
        setTextMessage(TextMessage);
    },[]);
    return(<Container display="flex" justifyContent="center">
        There are no posts yet!
    </Container>);
}

export default Posts