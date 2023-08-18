import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { Link } from 'react-router-dom'

function Panel() {

  const { user } = useSelector(state => state.auth)

  const date = new Date(user.created)

  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return (
    <section id="user-panel">
        <div className="container">
            <div className="user-profile">
                <img src="./img/gaming.avif" alt="" className="avatar" />
                <div className="user-info">
                    <span><strong>Username:</strong> { user.name }</span>
                    <span><strong>Email:</strong> { user.email }</span>
                    <span><strong>Member since:</strong> {`${day}/${month < 10 ? `0${month}` : month}/${year}`}</span>
                    <span><strong>Number of posts:</strong> {user.numberOfPosts}</span>
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