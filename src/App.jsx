import './App.css'
import MainSection from './components/MainSection'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Experience from './components/Experience'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Skills from './components/Skills'

function App() {


  return (
    <>
    <Nav/>
      <div>
      <Routes>
        <Route>
        <Route path='/' element={<Home/>}/>
        <Route path='/About me' element={<MainSection/>}/>
          <Route path='/Skills' element={<Skills/>}/>
          <Route path='/Projects' element={<Projects/>}/>
          <Route path='/Experience' element={<Experience/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Route>
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
