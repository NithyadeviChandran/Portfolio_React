import React from 'react'
import { FaGithub} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <div className="contactus">
        <h3>CONTACT</h3>
        <div className='email'>
        <a href="mailto:nithyadevi.ch@gmail.com">  <SiGmail/><span> nithyadevi.ch@gmail.com</span></a>
      <br />
        <a href="https://github.com/NithyadeviChandran"><FaGithub size={25}/>
        <span>https://github.com/NithyadeviChandran</span></a>
        <br />
        <a href="https://www.linkedin.com/in/nithyadevichandran/"><FaLinkedin size={25}/>
        <span>https://www.linkedin.com/in/nithyadevichandran/</span></a>

      
        
          </div>
        </div>      
  )
} 

export default Contact