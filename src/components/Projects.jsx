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
          <img src={Image}  height={200} width={200}/>
          <h4>PortfolioPage</h4></a>
          <a href="https://nithyatravelblog.netlify.app">
          <img src={pic}  height={200} width={200}/><h4>TravelPage</h4></a>
          <a href="https://landingpageworksop.netlify.app">
          <img src={pic1}  height={200} width={200}/><h4>LandingPage</h4></a>
          <a href=" https://recipe-nithyadevi.netlify.app">
          <img src={pic2}  height={200} width={200}/><h4>RecipePage</h4></a>
        </div>
    </div>
    </>
  )
}

export default Projects