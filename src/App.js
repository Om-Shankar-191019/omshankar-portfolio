import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'

const App = () => {
  return (
    <div >
      <Navbar />
      <Home />
      <About />
      <SocialLinks />
    </div>
  )
}

export default App