import { useState } from 'react'
import './App.css'
import About from './Fronend-Mentor/About'
import Header from './Fronend-Mentor/Header'
import Section from './Fronend-Mentor/Section'
import Work from './Fronend-Mentor/Work'
import Choose from './Fronend-Mentor/Choose'
import Communit from './Fronend-Mentor/Communit'
import Footer from './Fronend-Mentor/Footer'

function App() {
  
  return (
    <>
    {/* <h2>Hello World</h2> */}
  <About />
  <Header />
  <Section />
  <Work />
  <Choose />
  <Communit />
  <Footer />
  
    </>
  )
}

export default App
