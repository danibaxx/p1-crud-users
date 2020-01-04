import React, { useState, useEffect } from 'react';
import GetAxios from '../../utils/GetAxios';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    GetAxios()
      .get('/users')
      .then(res => {
        setUsers(res.data)
        console.log('GET RES', res.data)
      })
      .catch(err => {
        console.log('GET ERROR', err)
      })
  }, []);

  return (
    <div className="users">
      {users.map(user => (
        <div className="user-card" key={user.id}>
          <h3>Name: {user.name}</h3>
          <p>Bio: {user.bio}</p>
        </div>
      ))}
    </div>
  );
};
