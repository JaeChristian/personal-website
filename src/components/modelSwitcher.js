import { AnimatePresence } from "framer-motion"
import Section from "./sectionAnimation"
import OpaqueModel from "./mark2Voxel"
import TransparentModel from "./mark2Voxel-transparent"
import { Container, useColorModeValue } from "@chakra-ui/react"

function ModelSwitcher(){
    // const Opaque = useColorModeValue(false, true);
    // console.log(Opaque);
    return(
        <AnimatePresence>
            <Section>
                {/* {Opaque ? (<OpaqueModel/>) : (<TransparentModel/>)} */}
                <TransparentModel/>
            </Section>
        </AnimatePresence>
    );
}

export default ModelSwitcher