import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import './App.css'

gsap.registerPlugin(ScrollTrigger, SplitText)

function App() {
  return (
    <div className='flex-center h-[100vh]'>
      <h1 className="text-3xl text-indigo-300">hello GSAP</h1>
    </div>
  )
}

export default App
