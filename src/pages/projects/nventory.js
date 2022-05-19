import {Container, Box, Text, Heading, Link, Image, List, ListItem, Span, chakra, Stack, useColorModeValue} from "@chakra-ui/react" 
import Section from "../../components/sectionAnimation"
import ResLink from "../../components/resource-link"
import styled from "@emotion/styled"
import Inventory from "../../res/inventory.png"
import Admin from "../../res/admin.png"
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

function Nventory({setPage}) {
    return(
    <Container p={{base: 6, md: 0}} pt={{base:0}} minWidth={{md: "container.sm"}}>
        <Section delay={0.1}>
            <Box display="flex" flexDir="column" gap={2} mt={6}>
                <Box>
                    <Link color="#ff63c3" textUnderlineOffset={3} fontWeight={500} onClick={()=>setPage("projects")}>&lt; Back</Link>
                    <Heading fontSize="2xl" as="h2" fontWeight={700}>Home nVentory</Heading>
                </Box>
                <Text>
                    &nbsp; &nbsp;A simple home inventory web-app that allows users to add, edit, and remove items from their own inventory. This was my first attempt at implementing persistence.
                </Text>
                <Box>
                    <Text>These are the specific key features I wanted in the application:</Text>
                    <List listStyleType="circle" styleType={"circle"} ml={8} fontSize="sm">
                        <ListItem>Register and login functionality.</ListItem>
                        <ListItem>Adding items with name, price, and category. </ListItem>
                        <ListItem>Admin functionality (Manage categories, delete, and edit user information).</ListItem>
                        <ListItem>Edit account functionality (Change username, and password).</ListItem>
                    </List>
                </Box>

            </Box>
        </Section>
        <Section delay={0.2}>
            <Box mt={4}>
                <List>
                    <ListItem><Highlight>Platform</Highlight> - Website</ListItem>
                    <ListItem><Highlight>Stack</Highlight> - Java, JPA</ListItem>
                </List>
            </Box>
        </Section>
        <Section delay={0.3}>
            <Box mt={6} display="flex" flexDir="column" gap={4} alignItems="center">
                <Images src={Inventory} alt="Landing page"/>
                <Images src={Admin} alt="Home page"/>
            </Box>
        </Section>
    </Container>
    )
}
export default Nventory