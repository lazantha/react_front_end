import React, { useState } from 'react';

const Submit = () => {

  const [data, setData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  });

  const handleClick = (e) => {
    e.preventDefault();
    console.log(data); // Handle form data here (e.g., send to an API)
    // Clear the form by resetting the state
    setData({
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    });
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <form onSubmit={handleClick} method="POST">
        <input 
          type="text" 
          name="first_name" 
          placeholder="First Name" 
          value={data.first_name} 
          onChange={handleChange} 
        /><br />
        <input 
          type="text" 
          name="last_name" 
          placeholder="Last Name" 
          value={data.last_name} 
          onChange={handleChange} 
        /><br />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={data.email} 
          onChange={handleChange} 
        /><br />
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={data.password} 
          onChange={handleChange} 
        /><br />
        <input type="submit" value="Save" />
      </form>
    </div>
  );
}

export default Submit;
