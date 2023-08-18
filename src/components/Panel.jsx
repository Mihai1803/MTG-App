import React from 'react'
import { Link } from 'react-router-dom'

function Panel() {
  return (
    <section id="user-panel">
        <div className="container">
            <div className="user-profile">
                <img src="./img/gaming.avif" alt="" className="avatar" />
                <div className="user-info">
                    <span><strong>Username:</strong> Mihai</span>
                    <span><strong>Email:</strong> email@gmail.com</span>
                    <span><strong>Member since:</strong> 10/10/2010</span>
                    <span><strong>Number of posts:</strong> 3</span>
                    <div>
                        <Link to="/userpanel/create" className="post-btn">Create a post</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Panel