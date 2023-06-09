import React from 'react'
import MainSection from './MainSection'
import Projects from './Projects'
import Contact from './Contact'
import Experience from './Experience'
import Skills from './Skills'

function Home() {
  return (
    <div>
      <MainSection/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
    </div>
  )
}

export default Home