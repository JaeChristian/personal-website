import {Box, Link, Heading, Image} from "@chakra-ui/react";

function Logo({setPage}) {
    return(
        <Box>
            <Link _hover={"none"} href="javascript:void(0)" display="flex" gap={1} alignItems="center">
                {/* <Image src="/logo.png" w={30}></Image> */}
                <Heading as="h1" size="lg" letterSpacing={'tighter'} fontSize='xl' onClick={()=>setPage("home")}>
                    Jeremiah Ortiz
                </Heading>
            </Link>
        </Box>
    );
}

export default Logo