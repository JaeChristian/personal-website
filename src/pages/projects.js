import React, { useEffect } from "react";
import {Container, Box, Heading, Image, Stack, Text} from "@chakra-ui/react"
import HomenVentory from "../res/admin.png";
import NewcomersPlatform from "../res/newcomers-platform-2.png";
import Thumbnail from "../components/thumbnail.js"
import Section from "../components/sectionAnimation.js";
import Project from "../components/project"

function Projects({setTextMessage, setPage}) {
    const TextMessage = "Feel free to view some of my notable projects below!";
    useEffect(()=>{
        setTextMessage(TextMessage);
    },[]);

    return(
        <Container p={{base: 6, md: 0}} pt={{base:0}} minWidth={{md: "container.sm"}}>
            <Section delay={0.1}>
                <Box borderRad>
                    <Heading as="h2" fontWeight={700} fontSize="4xl">Projects</Heading>
                    <Stack direction={["column", "row"]} spacing={{base: 6, md: 45}} mt={[6]} alignItems="center">
                        <Project 
                            src={NewcomersPlatform} 
                            alt="Newcomers Platform" 
                            heading="Newcomers Platform"
                            body="A social media platform to help connect recent immigrants to mentors and organizations, and help them settle into Canada."
                            delay={0.2}
                            modalTitle="Newcomers Platform"
                            onClick={()=>{setPage("projects.nplatform")}}
                        >
                        </Project>
                        <Project 
                            src={HomenVentory} 
                            alt="Home Inventory" 
                            heading="Home nVentory"
                            body="A home inventory app that allows users to add items to their inventory list."
                            delay={0.2}
                            modalTitle="Home nVentory"
                            onClick={()=>{setPage("projects.nventory")}}
                        >
                        </Project>
                    </Stack>
                </Box>
            </Section>
        </Container>
    );
}

export default Projects