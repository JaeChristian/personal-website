import {Link} from "@chakra-ui/react";
function ResourceLink ({href, text, onClick}){
    return(<Link color="#ff63c3" href={href} target="_blank" onClick={onClick}>{text}</Link>);
}

export default ResourceLink;