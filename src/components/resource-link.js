import {Link} from "@chakra-ui/react";
function ResourceLink ({href, text}){
    return(<Link color="#ff63c3" href={href} target="_blank">{text}</Link>);
}

export default ResourceLink;