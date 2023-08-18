import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faPrint, faHouse } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  const [onPage, setOnPage] = useState(true)
  const { user } = useSelector(state => state.auth)
  

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
    <footer id="main-footer">
        <div className="container">
            <div className="main-footer">
                <div>
                    <h3>STUDIO|POW</h3>
                    <p className="footer-p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, reainpudiandae.</p>
                    <div className="icons-footer">
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
                    <p>Copyright &copy; 2023</p>
                </div>
                <div>
                    <h3>MENU</h3>
                    <div>
                        <ul className="list-footer">
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
                            {user ?
                                (
                                    <li><Link to="/userpanel">User Panel</Link></li>
                                )
                                :
                                (
                                    <>
                                        <li><Link to="/register">Register</Link></li>
                                        <li><Link to="/login">Login</Link></li>
                                        <li><Link to="/post">Posts</Link></li>
                                    </>
                                )
                            }
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
                </div>
                <div>
                    <h3>CONTACT INFO</h3>
                    <div className="contact-footer">
                        <div>
                            <FontAwesomeIcon icon={faPhone} className="social-footer-icon" />
                            <i className="fa-solid fa-phone"></i>
                            0710203040
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faEnvelope} className="social-footer-icon" />
                            Studio@gmail.com
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faPrint} className="social-footer-icon" />
                            Print
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faHouse} className="social-footer-icon" />
                            Adress Location City
                        </div>c
                    </div>
                </div>
                <div className="register-footer">
                    <h3>CHECK OUR POSTS</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <Link to={user ? '/userpanel' : '/post'} className="footer-btn">Check Posts</Link>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer