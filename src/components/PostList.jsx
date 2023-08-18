import React from 'react'
import { Link } from 'react-router-dom'

function PostList() {
  return (
    <section id="post">
        <div className="container">
            <div className="post-main">
                <div className="post-box">
                    <div className="box-heading">
                        <img src="./img/gaming2.jpg" alt="" className='box-img' />
                        <div className="box-ut">
                          <h1>Read Dead Redmption</h1>
                          <h4>Mihai Sefu</h4>
                        </div>
                    </div>
                    <div className="box-info">
                      <div className="box-category">Category</div>
                      <div className="box-date">Date</div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem doloremque ex cum, vel est inventore!</p>
                    <Link href="#">Read More</Link>
                  </div>
                  <div className="post-box">
                    <div className="box-heading">
                        <img src="./img/gaming2.jpg" alt="" className="box-img" />
                        <div className="box-ut">
                          <h1>Read Dead Redmption</h1>
                          <h4>Mihai Sefu</h4>
                        </div>
  
                    </div>
                    <div className="box-info">
                      <div className="box-category">Category</div>
                      <div className="box-date">Date</div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem doloremque ex cum, vel est inventore!</p>
                    <Link href="#">Read More</Link>
                  </div>
                  <div className="post-box">
                    <div className="box-heading">
                        <img src="./img/gaming2.jpg" alt="" className="box-img" />
                        <div className="box-ut">
                          <h1>Read Dead Redmption</h1>
                          <h4>Mihai Sefu</h4>
                        </div>
  
                    </div>
                    <div className="box-info">
                      <div className="box-category">Category</div>
                      <div className="box-date">Date</div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem doloremque ex cum, vel est inventore!</p>
                    <Link href="#">Read More</Link>
                  </div>
                
            </div>
        </div>
    </section>
  )
}

export default PostList