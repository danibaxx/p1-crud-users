import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className='nav-wrap'>
      <Link to="/">
        Home
      </Link>
      <Link to="/users">
        Users
      </Link>
      <Link to="/updateusers">
        Update Users
      </Link>
    </div>
  )
};