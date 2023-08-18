import React from 'react'

function LoginForm() {
  return (
    <>
        <form className="form-control">
          <div className="form-group">
            <label htmlFor="">Email:</label>
            <input type="email" placeholder="Please enter your email"/>
          </div>
          <div className="form-group">
            <label htmlFor="">Password:</label>
            <input type="password" placeholder="Plese enter a password" />
          </div>
          <button>Login</button>
        </form>
    </>
  )
}

export default LoginForm