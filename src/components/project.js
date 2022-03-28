import { useState } from "react"
import Thumbnail from "./thumbnail"
import styled from "@emotion/styled"
import {Container, Box, Modal} from "@chakra-ui/react"

const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    margin: 0;
`;

function ProjectModal() {
    return (
    <Modal>balls</Modal>
    )
}

function Project({src, alt, heading, body, delay}) {
    const [showModal, setShowModal] = useState(false);
    return(
        <>
            <Thumbnail 
                src={src} 
                alt={alt}
                heading={heading}
                body={body}
                delay={delay}
            />
            <ProjectModal/>
        </>
    )
}
export default Project