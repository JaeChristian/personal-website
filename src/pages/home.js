import React, { useEffect } from "react";
import {Container, Box, Heading, Image, useColorMode, useColorModeValue, Button, Text, List, ListItem, Link} from "@chakra-ui/react"
import styled from "@emotion/styled";
import ProfilePicture from "../res/profile.JPG";
import ResLink from "../components/resource-link.js";
import Section from "../components/sectionAnimation.js";

const BioYear = styled.span`
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: 700;
    margin-right: 10px;
`;

function Home({setTextMessage}) {
    const textMessage = "Hey there, I'm a Software Development student based in Canada!"
    const linksColor = useColorModeValue("teal.500", "teal.300")
    useEffect(()=>{
        setTextMessage(textMessage);
    },[]);
    
    return(
        <Container p={{base: 6, md: 0}} pt={{base:0}} minWidth={{md: "container.sm"}}>
            <Section delay={0.1}>
                <Box display={{md: 'flex'}}>
                    <Box flexGrow={1}>
                        <Heading fontSize='4xl' as="h2" variant="page-title" fontWeight={700}>
                            Jeremiah Ortiz
                        </Heading>
                        <Text>Software Developer ( Developer / Producer / Video Editor )</Text>
                    </Box>
                    <Box 
                        flexShrink={0} 
                        mt={{base: 4, md: 0}} 
                        ml={{md: 4}}
                        align="center"
                    >
                        <Image 
                            borderColor="whiteAlpha.800" 
                            borderWidth={2} 
                            borderStyle="solid" 
                            maxWidth="100px" 
                            display="inline-block" 
                            borderRadius="full" 
                            src={ProfilePicture} 
                            alt="profile image"
                        />
                    </Box>
                </Box>
            </Section>
            <Section delay={0.2}>
                <Box display="flex" flexDir="column" gap={2} mt={6} >
                    <Heading fontSize="2xl" as="h2" fontWeight={700}>About Me</Heading>
                    <Text mt={2}>
                        &nbsp; &nbsp;I am a software development student currently based in Calgary looking to become a full-stack developer.
                        I have a passion for product development, and I am always on the lookout for cool new technologies that interest me! 
                        I am currently working on a social media platform to help immigrants make connections and settle into Canada.
                    </Text>
                </Box>
            </Section>
            <Section delay={0.3}>
                <Box display="flex" flexDir="column" gap={2} mt={6} >
                    <Heading fontSize="2xl" as="h2" fontWeight={700}>Skills</Heading>
                    <Box display={"flex"} gap={10}>
                        <List styleType={"circle"} ml={4} display="flex" flexDirection="column">
                            <ListItem>Java</ListItem>
                            <ListItem>Javascript</ListItem>
                            <ListItem>React</ListItem>
                            <ListItem>Spring</ListItem>
                        </List>
                        <List styleType={"circle"} ml={4} display="flex" flexDirection="column">
                            <ListItem>NodeJS</ListItem>
                            <ListItem>CSS</ListItem>
                            <ListItem>C#</ListItem>
                            <ListItem>SQL</ListItem>
                        </List>
                    </Box>
                </Box>
            </Section>
            <Section delay={0.4}>
                <Box display="flex" flexDir="column" gap={2} mt={6} >
                    <Heading fontSize="2xl" as="h2" fontWeight={700}>Bio</Heading>
                    <Box>
                        <Text mt={2}>
                            <BioYear>2001</BioYear> 
                            Born in Manila, Philippines.
                        </Text>
                        <Text>
                            <BioYear>2007</BioYear> 
                            Moved to Toronto, Ontario.
                        </Text>
                        <Text>
                            <BioYear>2019</BioYear> 
                            Graduated from Father Michael Goetz Secondary School.
                        </Text>
                        <Text>
                            <BioYear>2020 to Present</BioYear> 
                            Studying at the Southern Alberta Institute of Technology.
                        </Text>
                    </Box>
                </Box>
            </Section>
            <Section delay={0.5}>
                <Box display="flex" flexDir="column" gap={2} mt={6} >
                    <Heading fontSize="2xl" as="h2" fontWeight={700}>I ♥</Heading>
                    <Text mt={2}>
                        &nbsp; &nbsp;Software development, music production, playing instruments, and <ResLink href="https://www.youtube.com/watch?v=J6SwRfdPu_s&t=4s" text="video editing"/>.
                    </Text>
                </Box>
            </Section>
        </Container>
    );
}

export default Home;