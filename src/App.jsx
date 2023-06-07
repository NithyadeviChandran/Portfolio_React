import './App.css'
import MainSection from './components/MainSection'
import Nav from './components/Nav'
import Footer from './components/Footer' 
import Projects from './components/Projects'
import Contact from './components/Contact'
import Experience from './components/Experience'

function App() {


  return (
    <>
      <div>
      <Nav/>
      <MainSection/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
      </div>
    </>
  )
}

export default App
