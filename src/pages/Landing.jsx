import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import About from '../components/About'


function Landing() {
  const [onPage, setOnPage] = useState(true)

  const content = (
    <>
        <h2 className="landing-small-text">WELCOME TO STUDIOPOW</h2>
        <p className="landing-large-text">
            PROUCE <span>FILMS</span> FEAUTURE, 
            <span>TELEVISION</span> & 
            <span>GAMES</span>
        </p>
        <Link to="/register" className="btn">JOIN US</Link>
    </>
  )    

  return (
    <>
        <section id='hero'>
          <Navbar  content={content}  onPage={onPage}/>
        </section>
        <About />
        <Footer />
    </>
  )
}

export default Landing