import {Container, Box, Text, Heading, Link, Image, List, ListItem, Span, chakra, Stack} from "@chakra-ui/react" 
import Section from "../../components/sectionAnimation"
import ResLink from "../../components/resource-link"
import styled from "@emotion/styled"
import HomeImage from "../../res/entries-home.png"
import HomeLight from "../../res/entries-home-light.png"
import LoginImage from "../../res/entries-login.png"

import { ChakraProvider } from "@chakra-ui/provider"
const Images = ({src, alt}) => {
    return(
    <Image 
        maxW={{base: "100%", md:"90%"}} 
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

function Entries({setPage}) {
    return(
    <Container p={{base: 6, md: 0}} pt={{base:0}} minWidth={{md: "container.sm"}}>
        <Section delay={0.1}>
            <Box display="flex" flexDir="column" gap={2} mt={6}>
                <Box>
                    <Link color="#ff63c3" textUnderlineOffset={3} fontWeight={500} onClick={()=>setPage("projects")}>&lt; Back</Link>
                    <Heading fontSize="3xl" as="h2" fontWeight={700}>Entries</Heading>
                </Box>
                <Heading fontSize = "xl" as="h3" fontWeight={700}>Background</Heading>
                <Text>
                    &nbsp; &nbsp;A few months ago, I started to get into the idea of journalling. I wanted to write my journals on an app rather than on a physical notebook so I took my search to the app store. 
                    However, I found that many of these journalling applications were bloated with unneeded features and had unpleasing interfaces. 
                    So instead of continuing my search, I thought of making my own web app as a fun side project that I would actually use.


                </Text>
                <Heading fontSize = "xl" as="h3" fontWeight={700}>About</Heading>
                <Text>
                    &nbsp; &nbsp;
                    Entries is a journaling app that focuses on simplicity and minimalism, because clutter and bloated features ruin the user experience.
                    Currently, it has basic CRUD functionality; users can create, edit, and delete entries, and have the ability to group entries into different tags.
                    In the future, I plan on implementing social features like allowing users to view other people's public entries. I also plan on making a mobile app using React Native.
                </Text>
            </Box>
        </Section>
        <Section delay={0.2}>
            <Box mt={4} display="flex">
                <List>
                    <ListItem><Highlight>Link</Highlight> - <Link color="#ff63c3" textUnderlineOffset={3} fontWeight={500} target="_blank" href="https://jovial-marshmallow-e9b3d7.netlify.app/">Netlify</Link></ListItem>
                    <ListItem><Highlight>Platform</Highlight> - Website</ListItem>
                    <ListItem><Highlight>Stack</Highlight> - React, NodeJS, MongoDB</ListItem>
                </List>
            </Box>
        </Section>
        <Section delay={0.3}>
            <Box mt={6} display="flex" flexDir="column" gap={4} alignItems="center">
                <Images src={HomeImage} alt="Home Page Dark"/>
                <Images src={HomeLight} alt="Home page"/>
                <Images src={LoginImage} alt="Login page"/>
            </Box>
        </Section>
    </Container>
    )
}
export default Entries