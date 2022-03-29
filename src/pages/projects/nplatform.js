import {Container, Box, Text, Heading, Link, Image, List, ListItem, Span, chakra, Stack} from "@chakra-ui/react" 
import Section from "../../components/sectionAnimation"
import ResLink from "../../components/resource-link"
import styled from "@emotion/styled"
import FeedImage from "../../res/newcomers-platform.png"
import LandingImage from "../../res/newcomers-platform-2.png"
import { ChakraProvider } from "@chakra-ui/provider"
const Images = ({src, alt}) => {
    return(
    <Image 
        maxW={["100%", "80%"]} 
        src={src} 
        alt={alt} 
        boxShadow="0 5px 4px rgba(0,0,0,.06), 0 5px 8px rgba(0,0,0,.08)" 
        borderRadius={"xl"}>
    </Image>
    );
}

const Highlight = ({children}) => {
    return(
    <chakra.span color="teal.300" fontWeight={500}>{children}</chakra.span>
    )
}

function NPlatform({setPage}) {
    return(
    <Container p={{base: 6, md: 0}} pt={{base:0}} minWidth={{md: "container.sm"}}>
        <Section delay={0.1}>
            <Box display="flex" flexDir="column" gap={2} mt={6}>
                <Box>
                    <Link color="#ff63c3" textUnderlineOffset={3} fontWeight={500} onClick={()=>setPage("projects")}>&lt; Back</Link>
                    <Heading fontSize="2xl" as="h2" fontWeight={700}>Newcomers Platform</Heading>
                </Box>
                <Text>
                    &nbsp; &nbsp;One of the biggest struggles of being a recent immigrant is making connections with other people. Connections can get you friends, jobs, 
                    and resources to help you settle into your new home. Newcomers Platform is a social media platform that aims to help recent immigrants with this exact problem. 
                </Text>
                <Text>
                    &nbsp; &nbsp;
                    This platform allows users to connect to mentors, organizations, and institutions, who are offering to help recent immigrants with adjusting to Canada.
                    To accomplish this, verified users can post about community events, job listings, and more!
                </Text>
            </Box>
        </Section>
        <Section delay={0.2}>
            <Box mt={4} display="flex">
                <List>
                    <ListItem><Highlight>Link</Highlight> - Coming soon</ListItem>
                    <ListItem><Highlight>Platform</Highlight> - Website</ListItem>
                    <ListItem><Highlight>Stack</Highlight> - React, Spring Boot, MongoDB</ListItem>
                </List>
            </Box>
        </Section>
        <Section delay={0.3}>
            <Box mt={6} display="flex" flexDir="column" gap={4} alignItems="center">
                <Images src={LandingImage} alt="Landing page"/>
                <Images src={FeedImage} alt="Home page"/>
            </Box>
        </Section>
    </Container>
    )
}
export default NPlatform