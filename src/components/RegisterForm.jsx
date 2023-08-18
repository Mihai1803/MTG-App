import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { register, reset } from '../feautres/auth/authSlice'

function RegisterForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    RePassword: ''
  })
  const { username, email, password, RePassword } = formData

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, isLoading, isError, isSucces, message } = useSelector(state => state.auth)

  useEffect(() => {
    if (isError) {
      console.log('ERROR');
    } 
    if (isSucces || user) {
      navigate('/')
    }
    dispatch(reset())
  }, [isError, isSucces, user, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (password !== RePassword) {
      console.log('Error');
    } else {
      const userData = {
        name: username,
        email: email,
        password: password
      }
      dispatch(register(userData))
      navigate('/')
    }
  }

  return (
    <>
        <form className="form-control" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="">Username:</label>
            <input 
              type="text"
              id='username'
              name='username'
              value={username}
              onChange={onChange}
              placeholder="Please enter a username"
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Email:</label>
            <input 
              type="email"
              id='email'
              name='email'
              value={email}
              onChange={onChange} 
              placeholder="Please enter your email"
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Password:</label>
            <input 
              type="password"
              id='password'
              name='password'
              value={password}
              onChange={onChange} 
              placeholder="Plese enter a password" 
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Confrim Passwrod:</label>
            <input 
              type="password"
              id='RePassword'
              name='RePassword'
              value={RePassword}
              onChange={onChange} 
              placeholder="Confirm your password"
              required 
            />
          </div>
          <button>Submit</button>
        </form>
    </>
  )
}

export default RegisterForm