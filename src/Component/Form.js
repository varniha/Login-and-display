// Form.jsx

import React, { useState } from 'react';
import '../Component/Form.css';
import { Link } from 'react-router-dom';

const Form = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className='form-container'>
      <fieldset>
        <legend>Login</legend>
        <form>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              name='email'
              placeholder='Enter your email'
              onChange={handleChange}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              name='username'
              placeholder='Enter your username'
              onChange={handleChange}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              placeholder='Enter your password'
              onChange={handleChange}
            />
          </div>

          <div className='button'>
            <Link to='/table' className='link' state={formData}>
              Submit
            </Link>
          </div>
        </form>
      </fieldset>
    </div>
  );
};

export default Form;
