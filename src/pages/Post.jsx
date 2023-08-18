import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PostList from '../components/PostList'

function Post() {
  const [onPage, setOnPage] = useState(false)

  const scrollToPost = () => {
        scroll.scrollTo('#post', {
        duration: 800,
        smooth: 'easeInOutQuad'
    })
  }  
  const content = (
    <>
        <h2 className="landing-small-text">WELCOME TO STUDIOPOW</h2>
        <p className="landing-large-text">
            PROUCE <span>FILMS</span> FEAUTURE, 
            <span>TELEVISION</span> & 
            <span>GAMES</span>
        </p>    
        <ScrollLink 
            to="post"
            smooth={true}
            duration={800}
            spy={true}
            offset={-70}
            onClick={scrollToPost}
            className='post-btn'
        >
            Check out the posts
        </ScrollLink>
    </>
  ) 
  return (
    <>
        <section id='hero'>
            <Navbar content={content} onPage={onPage} />
        </section>
        <PostList />
        <Footer/>
    </>
  )
}

export default Post