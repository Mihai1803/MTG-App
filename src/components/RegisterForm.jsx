import React from 'react'

function RegisterForm() {
  return (
    <>
        <form className="form-control">
          <div className="form-group">
            <label htmlFor="">Username:</label>
            <input type="text" placeholder="Please enter a username" />
          </div>
  
          <div className="form-group">
            <label htmlFor="">Email:</label>
            <input type="email" placeholder="Please enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="">Password:</label>
            <input type="password" placeholder="Plese enter a password" />
          </div>
          <div className="form-group">
            <label htmlFor="">Confrim Passwrod:</label>
            <input type="password" placeholder="Confirm your password" />
          </div>
          <button>Submit</button>
        </form>
    </>
  )
}

export default RegisterForm