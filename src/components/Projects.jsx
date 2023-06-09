import React from 'react'
import Image from '../assets/Portfolio.jpg'
import pic from '../assets/TravelPage.jpg'
import pic1 from '../assets/Landingpage.jpg'
import pic2 from '../assets/Recipe.jpg'


function Projects() {
  return (
    <>
    <div className='projects'>
        <h3>PROJECTS</h3>
        <p>My sample projects for reference</p>
        <div className='projectImage'>
          <a href="https://nithyaportfolio.netlify.app">
          <img src={Image}/>
          <h4>PortfolioPage</h4></a>
          <a href="https://nithyatravelblog.netlify.app">
          <img src={pic}/><h4>TravelPage</h4></a>
          <a href="https://landingpageworksop.netlify.app">
          <img src={pic1} /><h4>LandingPage</h4></a>
          <a href=" https://recipe-nithyadevi.netlify.app">
          <img src={pic2} /><h4>RecipePage</h4></a>
        </div>
    </div>
    </>
  )
}

export default Projects