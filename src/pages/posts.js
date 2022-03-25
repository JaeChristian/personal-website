import React, {useEffect} from "react";

function Posts({setTextMessage}) {
    const TextMessage = "Enjoy some of my content outside of coding!";
    useEffect(()=>{
        setTextMessage(TextMessage);
    },[]);
    return(<>
        
    </>);
}

export default Posts