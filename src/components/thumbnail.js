import React from "react"
import {Image, Link, Heading, Text} from "@chakra-ui/react"
import styled from "@emotion/styled"
import Section from "./sectionAnimation.js";

const AnimatedLink = styled.a`
    cursor: pointer;
    display: flex;
    flex-direction:column;
    align-items: center;
`;

function Thumbnail({src, alt, heading, body, delay}) {
    return(
        <Section delay={delay}>
            <AnimatedLink href="javascript:void(0)">
                <Image 
                    maxW={["100%", "275px"]} 
                    src={src} 
                    alt={alt} 
                    boxShadow="0 5px 4px rgba(0,0,0,.06), 0 5px 8px rgba(0,0,0,.08)" 
                    borderRadius={"xl"} 
                    className="thumbnail">
                </Image>
                <Heading align="center" mt={{base: 4, md: 4}} fontSize="2xl">{heading}</Heading>
                <Text align="center" mt={{base: 2, md: 2}} fontSize="sm" maxWidth="100%">{body}</Text>
            </AnimatedLink>
        </Section>
    );
}

export default Thumbnail