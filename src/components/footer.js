import {Box, Text, useColorModeValue, Link} from "@chakra-ui/react"

function Footer() {
    const linksColor = useColorModeValue("teal.500", "teal.300")
    return(
        <Box display="flex" flexDir="column" alignItems="center" p={8}>
            <Box display="flex" justifyContent="center" fontSize={"sm"} gap={1} fontWeight={500}>
                    <Link color={linksColor} href="https://github.com/JaeChristian" target="_blank">
                        GitHub
                    </Link> · 
                    <Link color={linksColor} href="https://www.linkedin.com/in/jae01ortiz/"target="_blank">
                        LinkedIn
                    </Link> 
                </Box>
            <Text color="gray" fontSize="sm">Designed and built by Jeremiah Ortiz</Text>
        </Box>
    );
}
export default Footer