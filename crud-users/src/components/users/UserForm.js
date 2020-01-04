import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function UserForm() {
  const [user, setUser] = useState({
    id: '',
    name: '',
    bio: '',
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    axios
      .post('', user)
      .then(result => {
        setUser({
          name: '',
          bio: '',
        })
        console.log('User was added', result.data)
      })
      .catch(error => {
        console.log('POST ERROR', error)
      })
  };

  return (
    <div className="user-form">
      <h1>Update Users:</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="bio"
          placeholder="Bio"
          value={user.bio}
          onChange={handleChange}
        />

        <button>Update</button>
      </form>
    </div>
  )
}
