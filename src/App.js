import React from 'react'
import './app.css'
import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import Card from './components/Card'

import Contact from "./components/contact"
export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Card/>
    </div>
  )
}



