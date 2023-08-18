import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login, reset } from '../feautres/auth/authSlice'


function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const { email, password } = formData

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, isLoading, isError, isSucces, message} = useSelector(state => state.auth)

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
    const userData = {
      email: email,
      password: password
    }
    console.log(userData);
    dispatch(login(userData))
  }



  return (
    <>
        <form className="form-control" onSubmit={onSubmit}>
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
          <button>Login</button>
        </form>
    </>
  )
}

export default LoginForm