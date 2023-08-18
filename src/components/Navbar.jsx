import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Navbar({ content, onPage }) {

  const scrollToAbout = () => {
    scroll.scrollTo('#about', {
        duration: 800,
        smooth: 'easeInOutQuad'
    })
  }  
  const scrollToFooter = () => {
    scroll.scrollTo('#main-footer', {
        duration: 800,
        smooth: 'easeInOutQuad'
    })
  }  

  return (
    <>
        <nav className="main-nav">
            <div>   
                <h1>STUDIO|POW</h1>
            </div>
            <div>
                <ul className="list-nav">
                    <li><Link to="/">Home</Link></li>
                    <li>
                        {onPage ?
                            ( <ScrollLink 
                                to="about"
                                smooth={true}
                                duration={800}
                                spy={true}
                                offset={-70}
                                onClick={scrollToAbout}
                            >
                                About
                            </ScrollLink> ) :
                            (<Link to="/">About</Link>)
                        }
                    </li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/post">Posts</Link></li>
                    <li>
                        <ScrollLink 
                            to="main-footer"
                            smooth={true}
                            duration={800}
                            spy={true}
                            offset={-70}
                            onClick={scrollToFooter}
                        >
                            Contact
                        </ScrollLink>
                    </li>
                </ul>
            </div>
            <div className="socials-nav">
                <Link to='http://facebook.com'>
                    <FontAwesomeIcon icon={faFacebook} size="2x"  className="social-footer-icon"/>
                </Link>
                <Link to='http://twitter.com'>
                    <FontAwesomeIcon icon={faTwitter} size="2x"  className="social-footer-icon"/>
                </Link>
                <Link to='http://youtube.com'>
                    <FontAwesomeIcon icon={faYoutube} size="2x"  className="social-footer-icon"/>
                </Link>
                <Link to='http://instagram.com'>
                    <FontAwesomeIcon icon={faInstagram} size="2x"  className="social-footer-icon"/>
                </Link>
            </div>
        </nav>
        <div className="landing">
            { content }
        </div>
    </>
  )
}

export default Navbar