import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import {HamburgerIcon, HumburgerIcon} from '@chakra-ui/icons'
import Toggle from "./darkModeToggle.js";
import styled from "@emotion/styled";

const MenuLinks = styled.a`
    width: 100%;
    height: 100%;
`;

function Navbar(){
    const bgColor = useColorModeValue('whiteAlpha.200', '#20202380')
    const bgColorComponents = useColorModeValue('#ffffff', '#202023')
    return(
    <Box
        position="fixed"
        top="0"
        as="nav"
        w="100%"
        bg={bgColor}
        style={{backdropFilter:'blur(10px)'}}
        zIndex={1}
        boxShadow="0 5px 4px rgba(0,0,0,.02), 0 5px 8px rgba(0,0,0,.03)"
    >
        <Container 
            display="flex" 
            p={2} 
            maxW="container.md" 
            wrap="wrap"
            alignItems={"center"}
            justifyContent="space-between"
        >
            <Flex mr={5}>
                <Link _hover={"none"} href="/"><Heading as="h1" size="lg" letterSpacing={'tighter'} fontSize='xl'>Jeremiah Ortiz</Heading></Link>
                
            </Flex>
            <Stack 
            direction={{base: 'column', md: 'row'}}
            display={{base: 'none', md: 'flex'}}
            width={{base: 'full', md: 'auto'}}
            flexGrow={1}
            mt={{base: 4, nmd: 0}}
            >
                <a href="/projects">Projects</a>
                <a href="/posts">Posts</a>
            </Stack>

            <Box flex={1} align="right">
                <Toggle/>
                <Box ml={2} display={{base: 'inline-block', md:'none'}}>
                    <Menu>
                        <MenuButton 
                        as={IconButton} 
                        icon={<HamburgerIcon/>} 
                        variant="outline" 
                        aria-label="options"
                        />
                        <MenuList bg={bgColorComponents}>
                            <MenuItem><MenuLinks href="/projects">Projects</MenuLinks></MenuItem>
                            <MenuItem><MenuLinks href="/highlights">Posts</MenuLinks></MenuItem>
                        </MenuList> 
                    </Menu>
                </Box>
            </Box>
        </Container>
    </Box>);
}

export default Navbar;