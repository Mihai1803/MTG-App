import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Panel from '../components/Panel'
import PostList from '../components/PostList'

function UserPanel() {
  
  return (
    <>
        <Navbar />
        <Panel />
        <PostList />
        <Footer/>
    </>
  )
}

export default UserPanel