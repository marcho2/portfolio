import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Tech from './components/tech'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/Footer'


function App() {

  return (
    <>
    <main>
      <div className='flex flex-col items-center px-4 md:px-8 lh:px-16 bg-gradient-to-b from-[#572975] via-[#572975] to-black'>
      <Navbar/>
      <Hero/>
      <Tech/>
      <Projects/>
      <Contact/>
      <Footer/>
      </div>
    </main>
    </>
  )
}

export default App
