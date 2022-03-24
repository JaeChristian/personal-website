import React from "react";
import {Container, Box, Heading, Image, useColorMode, useColorModeValue, Button, Text} from "@chakra-ui/react"
import ProfilePicture from "../res/profile.JPG";
function Home() {
    const {toggleColorMode} = useColorMode();
    const topMessageColor = useColorModeValue('whiteAlpha.400', 'whiteAlpha.200')
    return(
        <Container mt={20}>
            <Box borderRadius="lg" bg={topMessageColor} p={3} mb={6} mt={6} align="center">
                Hello, I'm a Software Development student based in Canada!
            </Box>
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
                    ml={{md: 6}}
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
                {/* <Button onClick={toggleColorMode}> switch</Button> */}
            </Box>
        </Container>
    );
}

export default Home;