import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import LoginForm from '../components/LoginForm'
import Footer from '../components/Footer'

function Login() {
  const [onPage, setOnPage] = useState(false)
  return (
    <>
        <section id='hero'>
            <Navbar onPage={onPage} />
            <LoginForm />
        </section>
        <Footer />
    </>
  )
}

export default Login