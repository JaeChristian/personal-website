import Thumbnail from "./thumbnail"
import Section from "./sectionAnimation"

function Project({src, alt, heading, body, delay, onClick}) {
    return(
        <button onClick={onClick}>
            <Thumbnail 
                src={src} 
                alt={alt}
                heading={heading}
                body={body}
                delay={delay}
            />
        </button>
    )
}
export default Project