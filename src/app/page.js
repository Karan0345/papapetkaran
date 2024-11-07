'use client'
import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Services from '../Components/Services'
import About from '../Components/About' 
import Footer from '../Components/Footer'    
function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Footer />
    </div>
  )
}

export default page
