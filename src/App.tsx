import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cocktails from './components/cocktails'
import About from './components/About'
import Art from './components/Art'


gsap.registerPlugin(ScrollTrigger, SplitText)

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
    </>
  )
}

export default App
