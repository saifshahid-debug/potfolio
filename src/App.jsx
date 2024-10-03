import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Toaster } from "react-hot-toast";


const App = () => {
  return (
  <>
  <Navbar/>
  <Home/>
  <About/>
  <Project/>
  <Experience/>
  <Contact/>
  <Footer/>
  <Toaster />
  </>
  )
}

export default App
