import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import RegisterForm from '../components/RegisterForm'
import Footer from '../components/Footer'

function Register() {
  const [onPage, setOnPage] = useState(false)
  return (
    <>
        <section id='hero'>
            <Navbar onPage={onPage}/>
            <RegisterForm />
        </section>
        <Footer />
    </>
  )
}

export default Register