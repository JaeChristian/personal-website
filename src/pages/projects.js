import React, { useEffect } from "react";
import {Container, Box, Heading, Image, Stack} from "@chakra-ui/react"
import HomenVentory from "../res/admin.png";
import Temp from "../res/admin2.png";
import NewcomersPlatform from "../res/newcomers-platform-2.png";
import Thumbnail from "../components/thumbnail.js"

function Projects({setTextMessage}) {
    const TextMessage = "Feel free to view some of my notable projects below!";
    useEffect(()=>{
        setTextMessage(TextMessage);
    },[]);

    return(
        <Container p={{base: 6, md: 0}} pt={{base:0}} minWidth={{md: "container.sm"}}>
            <Box borderRad>
                <Heading as="h2" fontWeight={700} fontSize="4xl">Projects</Heading>
                <Stack direction={["column", "row"]} spacing={{base: 6, md: 45}} mt={[6]}>
                    <Thumbnail 
                        src={NewcomersPlatform} 
                        alt="Newcomers Platform" 
                        heading="Newcomers Platform"
                        body="A social media platform to help connect recent immigrants to mentors and organizations, and help them settle into Canada."
                    />
                    <Thumbnail 
                        src={HomenVentory} 
                        alt="Home Inventory" 
                        heading="Home nVentory"
                        body="A home inventory app that allows users to add items to their inventory list."
                    />
                </Stack>
            </Box>
        </Container>
    );
}

export default Projects