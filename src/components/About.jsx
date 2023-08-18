import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
        <section id="about">
            <div className="container">
                <div className="about-main">
                    <div className="about-section-1">
                        <div className="about-heading">
                            <div className="line"></div>
                            <div className="about-heading-content">
                                <h3>WELCOME TO</h3>
                                <h2>STUDIO|POW</h2>
                            </div>
                        </div>
                        <div className="about-section-p1">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique minus labore vel pariatur, facilis unde autem provident quo consequuntur cum aliquam quos accusamus animi vero dolores, rem cupiditate ad doloremque delectus dolorum quae sapiente? Esse laboriosam hic labore perferendis quaerat.</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi laboriosam ab esse atque, temporibus harum nulla aliquid repellendus quae sint eaque saepe voluptates delectus ipsam aspernatur iste itaque eum vel reiciendis optio voluptatibus. At excepturi in magnam quisquam incidunt nam?</p>                
                        </div>
                        <Link to="/post" className="about-btn">ABOUT US</Link>
                    </div>
                    <div>
                        <img src="./img/gaming3.jpg" alt="img" className="about-img"/>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About