import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Cocktail from './components/Cocktail.jsx';
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    // <div className='flex-center h-[100vh]'>
    //   <h1 className='flex-center'>Hello, GSAP!</h1>
    // </div>
    <main>
      <Navbar />
      <Hero />
      <Cocktail />
    </main>
  )
}

export default App
