import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div className='Nav grow'>
    <div className='Nav_left'>
        <h1>FrontEnd<span>Developer</span></h1>
        </div>
       <div className='Nav_right'>
        <Link to="About me" >
        <h4>About me</h4>
        </Link>
        <Link to="Skills">
        <h4>Skills</h4>
        </Link>
        <Link to="Projects">
        <h4>Projects</h4>
        </Link>
        <Link to="Contact">
        <h4>Contact</h4>
        </Link>
        <h4 className='Connectbutton'>Connect with me</h4>
       </div>


    </div>
  )
}

export default Nav