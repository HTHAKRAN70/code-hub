import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

export default function SocialHandles({classes = ''}){

    return(
        <div  className={`${classes} flex gap-3`}>
      <Link target="_blank" to='https://www.linkedin.com/in/aarav-thakran-779779240'><FaLinkedin /></Link>
      <Link target="_blank" to='https://github.com/HTHAKRAN70'><FaGithub /></Link>
      <Link target="_blank" to='mailto:hthakran45@@gmail.com'><SiGmail /></Link>
      
      
      </div>
    )

}