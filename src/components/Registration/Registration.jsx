import React from 'react';
import { useState } from 'react';

const Registration = () => {

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  }

    return (
     <div>
        <h1>Registration</h1>

        <form onSubmit={handleSubmit}>

          <div>
            <input
              type="email"
              placeholder="Email Address"
              id="email"
              name="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, username: user.username, email: e.target.value, password: user.password, passwordConfirm: user.passwordConfirm })}
            />
          </div>
          
          <div>
            <input
              type="text"
              placeholder="User Name"
              id="name"
              name="name"
              value={user.email.includes('@') ? user.email.substring(0, user.email.indexOf('@')) : user.username}
              onChange={(e) => setUser({ ...user, username: user.email.includes('@') ? user.email.substring(0, user.email.indexOf('@')) : e.target.value, email: user.email, password: user.password, passwordConfirm: user.passwordConfirm })}
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, username: user.username, email: user.email, password: e.target.value, passwordConfirm: user.passwordConfirm })}
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              id="passwordConfirm"
              name="password"
              value={user.passwordConfirm}
              onChange={(e) => setUser({ ...user, username: user.username, email: user.email, password: user.password, passwordConfirm: e.target.value })}
            />
          </div>

          <button type="submit">Register</button>

        </form>

      </div>
    )

};

export default Registration;