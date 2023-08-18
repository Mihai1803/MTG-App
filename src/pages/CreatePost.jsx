import React from 'react'
import Navbar from '../components/Navbar'
import PostForm from '../components/PostForm'
import Footer from '../components/Footer'

function CreatePost() {
  return (
    <>
        <section id="hero">
            <Navbar />
            <PostForm />
        </section>
        <Footer />
    </>
  )
}

export default CreatePost